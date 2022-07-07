import { axiosInstance } from '../axiosInstance'

describe('axiosInstance', () => {
  it('should return the correct baseUrl', () => {
    expect(axiosInstance.getUri()).toEqual(undefined)
  })
})
