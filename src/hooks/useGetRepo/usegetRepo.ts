import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getRepo, RepoType } from '../../lib/api/repo'
import { getLanguages, Languages } from '../../lib/api/languages'

/**
 * Aggregates single repo and language queries
 */
export const query = async (repoName?: string) => {
  const repo = await getRepo(`https://api.github.com/repos/godaddy/${repoName}`)
  const languages = await getLanguages(`https://api.github.com/repos/godaddy/${repoName}/languages`)

  return { repo, languages }
}

/**
 * Gets a single repo
 */
export const useGetRepo = () => {
  const params = useParams()
  const { data, isLoading, error, isError } = useQuery<
    { repo: RepoType | undefined; languages: Languages | undefined },
    Error
  >(['repos', params], () => query(params?.slug))

  return {
    data,
    isLoading,
    isError,
    error,
  }
}
