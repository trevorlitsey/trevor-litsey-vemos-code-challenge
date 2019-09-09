import React from 'react'
import { shallow } from 'enzyme'
import Post from './post'

const renderPost = ({ post, ...props } = {}) => {
  const propsToUser = {
    post: {
      data: {
        author: '',
        created: 123,
        num_comments: 0,
        score: 0,
        thumbnail: '',
        permalink: '',
        title: '',
        ...post,
      },
    },
    ...props,
  }

  return shallow(<Post {...propsToUser} />)
}

describe('<Post />', () => {
  it('should render without crashing', () => {
    const wrapper = renderPost()
    expect(wrapper.type()).not.toBeNull()
  })

  it.todo('should render author name and link to profile')

  it.todo('should render date/time of when post was created')

  it.todo('should render number of comments')

  it.todo('should render number of votes')

  it.todo(
    'should render thumbnail if supplied or value equals "self", "image" or "default"'
  )

  it.todo('should not render thumbnail if not supplied')

  it.todo('should render title and link to post')
})
