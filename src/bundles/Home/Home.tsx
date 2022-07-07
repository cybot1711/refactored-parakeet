import React, { useEffect, useState } from 'react'
import {
  ScrollBox,
  ScrollContainer,
  SkeletonItem,
  StyledContainer,
  Box,
  Input,
  Item,
} from './styles'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from 'react-query'
import { getRepos } from '../../lib/api'

export const Home = () => {
  const { ref, inView } = useInView()
  const [filter, setFilter] = useState<string | undefined>(undefined)

  const { status, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['repos', filter],
    async ({ pageParam = 1 }) => await getRepos({ pageParam, filter }),
    {
      cacheTime: 0,
      getNextPageParam: (lastPage) => {
        // @ts-expect-error: match
        return lastPage?.repos?.length > 0 ? lastPage.pageParam + 1 : undefined
      },
    },
  )

  useEffect(() => {
    if (inView) {
      ;(async () => await fetchNextPage())()
    }
  }, [inView])

  return (
    <StyledContainer>
      <Box>
        <Input
          placeholder='Dummy search'
          onChange={(e) => setFilter(e.target.value)}
          value={filter ?? ''}
        />
        <ScrollContainer>
          <ScrollBox>
            {status === 'loading' ? (
              <p>Loading...</p>
            ) : status === 'error' ? (
              // @ts-expect-error: match
              <span>Error: {error.message}</span>
            ) : (
              <>
                {
                  // @ts-expect-error: match
                  data.pages.map((page) =>
                    // @ts-expect-error: match
                    page?.repos?.map(
                      (item: {
                        name: React.Key | null | undefined | string
                        full_name: string
                      }) => <Item key={item.name}>{item?.full_name}</Item>,
                    ),
                  )
                }
                {hasNextPage && (
                  <SkeletonItem as='div' ref={ref} width='100%' height={70}>
                    Loading more items ...
                  </SkeletonItem>
                )}
              </>
            )}
          </ScrollBox>
        </ScrollContainer>
      </Box>
    </StyledContainer>
  )
}
