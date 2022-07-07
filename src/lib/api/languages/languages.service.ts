import { axiosInstance } from '../axiosInstance'
import { type Languages } from './types'

export const getLanguages = async (url = '') => {
  try {
    const result = await axiosInstance.get<Languages>(url)

    return result.data
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
