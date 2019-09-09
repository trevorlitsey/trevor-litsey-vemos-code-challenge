import React from 'react'
import PropTypes from 'prop-types'
import { URL } from '../constants'
import LabelValue from './label-value'
import './post.css'

const Post = ({ post }) => {
  const {
    author,
    created: createdAtSeconds,
    num_comments: numComments,
    permalink,
    score,
    thumbnail,
    title,
  } = post.data

  const createAtDateObj = new Date(createdAtSeconds * 1000)
  const createdAtDateStr = createAtDateObj.toLocaleString()
  const createdAtYearMonthDay = `${createAtDateObj.getFullYear()}-${createAtDateObj.getMonth() +
    1}-${createAtDateObj.getDate()}`

  return (
    <div className="post">
      {thumbnail && !['self', 'image', 'default'].includes(thumbnail) && (
        <img alt={title} className="post__thumbnail" src={thumbnail} />
      )}
      <div className="post__content">
        <p className="post__date">
          <time dateTime={createdAtYearMonthDay}>{createdAtDateStr}</time>
        </p>
        <h2 className="post__title">
          <a href={URL.REDDIT_BASE + permalink}>{title}</a>
        </h2>
        <div className="post__content-bottom">
          <LabelValue
            label="Author"
            value={<a href={`${URL.REDDIT_AUTHOR}/${author}`}>{author}</a>}
          />
          <LabelValue label="Votes" value={score} />
          <LabelValue label="Comments" value={numComments} />
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    data: PropTypes.shape({
      author: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      num_comments: PropTypes.number.isRequired,
      permalink: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
}

export default Post
