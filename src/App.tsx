import React, { useEffect } from 'react'
import { Container, Skeleton, styled } from '@mui/material'
import { useInfiniteQuery } from 'react-query'
import { useInView } from 'react-intersection-observer'
import { getRepos } from './lib/api'

const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledLayout = styled('div')({
  display: 'flex',
  height: '100vh',
  background: 'conic-gradient(hsla(354, 95%, 24%, 1) 50%, hsla(234, 70%, 24%, 1))',
})

const Box = styled('div')({
  backdropFilter: 'blur(8px)',
  boxShadow: '0px 10px 15px 10px rgb(0 0 0 / 15%)',
  backgroundColor: 'rgb(228 228 228 / 15%)',
  width: 600,
  height: 700,
  borderRadius: 16,
  padding: 24,
  color: 'white',
  overflow: 'hidden',
})

const Item = styled('div')({
  backdropFilter: 'blur(8px)',
  boxShadow: '0 10px 15px 10px rgb(0 0 0 / 15%)',
  color: 'white',
  width: '100%',
  padding: 21,
  borderRadius: 8,
  marginBottom: 10,
})

const SkeletonItem = styled(Skeleton)({
  backdropFilter: 'blur(8px)',
  boxShadow: '0 10px 15px 10px rgb(0 0 0 / 15%)',
  color: 'white',
  padding: 21,
  borderRadius: 8,
  marginBottom: 10,
})

const Input = styled('input')({
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'none',
  fontSize: 18,
  color: '#FFF',
  fontWeight: 'bold',
  padding: '20px 10px 20px 20px',
  marginBottom: '30px',
  borderRadius: '25px',
  boxShadow: 'inset 8px 8px 8px hsla(354, 95%, 24%, 0.5)',
  inset: '-8px -8px 8px #ffffff',
})

const ScrollContainer = styled('div')({
  height: '95%',
  margin: 0,
})

const ScrollBox = styled('div')({
  height: '90%',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: 10,
})

/**
 * Renders the Application layout in this application
 */
const App = () => {
  const { ref, inView } = useInView()
  const [filter, setFilter] = React.useState<string | undefined>(undefined)

  const { status, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['repos', filter],
    async ({ pageParam = 1 }) => await getRepos({ pageParam, filter }),
    {
      cacheTime: 0,
      // enabled: Boolean(filter),
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

  console.log(inView)
  return (
    <StyledLayout>
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
    </StyledLayout>
  )
}

export default App
