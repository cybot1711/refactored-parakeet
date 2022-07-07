import { axiosInstance } from '../../axiosInstance'
import { getRepo } from '../repo.service'

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn(),
  }),
}))

describe('lib:api:repo', () => {
  afterEach(jest.resetAllMocks)

  it('should be called with the correct url', async () => {
    ;(axiosInstance.get as jest.Mock).mockReturnValue(Promise.resolve({ data: {} }))
    const result = await getRepo('mock-url')

    expect(axiosInstance.get).toBeCalledWith('mock-url')
    expect(result).toEqual({})
  })

  it('should throw', async () => {
    ;(axiosInstance.get as jest.Mock).mockReturnValue(Promise.reject(new Error('Error')))

    await expect(getRepo('mock-url')).rejects.toThrow('Error')
  })

  it('should only check error instances for this application', async () => {
    ;(axiosInstance.get as jest.Mock).mockReturnValue(Promise.reject(new Array('Error')))

    await expect(getRepo('mock-url')).resolves.toEqual(undefined)
  })
})
