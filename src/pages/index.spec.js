import React from 'react'
import { shallow } from 'enzyme'
import * as utils from '../utils'
import IndexPage from './index'

const fetchJSONSpy = jest.spyOn(utils, 'fetchJSON').mockImplementation(() =>
  Promise.resolve({
    data: {
      children: [],
    },
  })
)

const renderIndexPage = () => {
  return shallow(<IndexPage />)
}

describe('<IndexPage />', () => {
  afterEach(() => {
    fetchJSONSpy.mockReset()
  })

  afterAll(() => {
    fetchJSONSpy.mockRestore()
  })

  it('should render without crashing', () => {
    const wrapper = renderIndexPage()
    expect(wrapper.type()).not.toBeNull()
  })

  it.todo('should fetch posts on mount')

  it.todo('should render loading state')

  it.todo('should render error state')

  it.todo('should render posts')
})
