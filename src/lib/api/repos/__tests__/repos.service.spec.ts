import { axiosInstance } from '../../axiosInstance'
import { getRepos } from '../repos.service'

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn(),
  }),
}))

describe('lib:api:repos', () => {
  afterEach(jest.resetAllMocks)

  it('should be called with the correct url', async () => {
    ;(axiosInstance.get as jest.Mock).mockReturnValue(Promise.resolve({ data: {} }))
    const result = await getRepos({ pageParam: 1 })

    expect(axiosInstance.get).toBeCalledWith('https://api.github.com/orgs/godaddy/repos', {
      params: { page: 1 },
    })
    expect(result).toEqual({ pageParam: 1, repos: {} })
  })

  it('should throw', async () => {
    ;(axiosInstance.get as jest.Mock).mockReturnValue(Promise.reject(new Error('Error')))

    await expect(getRepos({})).rejects.toThrow('Error')
  })

  it('should only check error instances for this application', async () => {
    ;(axiosInstance.get as jest.Mock).mockReturnValue(Promise.reject(new Array('Error')))

    await expect(getRepos({})).resolves.toEqual(undefined)
  })
})
