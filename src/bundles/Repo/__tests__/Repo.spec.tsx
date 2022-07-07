import { Repo } from '../Repo'
import { render, screen } from '@testing-library/react'
import { useGetRepo } from '../../../hooks'
import { mockRepo } from '../../../lib/api/repo/__mockData__'

jest.mock('../../../hooks')

describe('bundles:Repo', () => {
  const view = () => render(<Repo />)

  afterEach(jest.resetAllMocks)

  it('should render the component', () => {
    ;(useGetRepo as jest.Mock).mockReturnValue({
      data: { repo: mockRepo, languages: { Javascript: 123 } },
    })
    view()

    expect(screen.getByText('Repo name')).toBeInTheDocument()
    expect(screen.getByText('Repo description')).toBeInTheDocument()
  })
})
