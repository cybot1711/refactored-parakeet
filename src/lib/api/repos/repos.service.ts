import { axiosInstance } from '../axiosInstance'

export const getRepos = async ({ pageParam = 1, filter = '' }) => {
  try {
    const result = await axiosInstance.get<unknown>('https://api.github.com/orgs/godaddy/repos', {
      params: { page: pageParam, phrase: filter },
    })

    return {
      repos: result.data,
      pageParam,
    }
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
