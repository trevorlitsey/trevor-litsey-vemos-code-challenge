import React, { PureComponent } from 'react'
import { fetchJSON } from '../utils'
import { Endpoints } from '../constants'
import Post from '../components/post'

class IndexPage extends PureComponent {
  state = {
    loading: true,
    error: false,
    posts: [],
  }

  componentDidMount = () => {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const posts = await fetchJSON(Endpoints.GET_REDDIT_POSTS_PICS)
      this.setState({ posts })
    } catch (e) {
      this.setState({ error: true })
    }
    this.setState({ loading: false })
  }

  render() {
    const { error, loading, posts } = this.state

    if (error) {
      return (
        <p className="text-center">
          Sorry! An error occurred while fetching posts.
        </p>
      )
    }

    if (loading) {
      return <p className="text-center">Loading...</p>
    }

    return posts.data.children.map(post => {
      return <Post post={post} key={post.data.id} />
    })
  }
}

export default IndexPage
