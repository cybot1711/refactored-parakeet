import { axiosInstance } from '../axiosInstance'

describe('axiosInstance', () => {
  it('should return the correct baseUrl', () => {
    expect(axiosInstance.getUri()).toEqual('https://api.jsonbin.io/b')
  })
})
