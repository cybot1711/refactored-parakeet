import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { getRepos } from '../../lib/api'
import { RepoType } from '../../lib/api/repo'

export const useInfiniteScroll = () => {
  const { ref, inView } = useInView()
  const [filter, setFilter] = useState<string | undefined>(undefined)

  const { status, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery<
    { repos: RepoType[] | undefined; pageParam: number | undefined } | undefined,
    Error
  >(['repos', filter], ({ pageParam = 1 }) => getRepos({ pageParam, filter }), {
    cacheTime: 0,
    getNextPageParam: (lastPage) => {
      return lastPage?.repos && lastPage?.repos?.length > 0 ? lastPage.pageParam! + 1 : undefined
    },
  })

  useEffect(() => {
    if (inView) {
      ;(async () => await fetchNextPage())()
    }
  }, [inView])

  return {
    ref,
    filter,
    setFilter,
    status,
    data,
    error,
    hasNextPage,
  }
}
