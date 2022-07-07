import { axiosInstance } from '../axiosInstance'
import { type RepoType } from './types'

export const getRepo = async (url = '') => {
  try {
    const result = await axiosInstance.get<RepoType>(url)

    return result.data
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
