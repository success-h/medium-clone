import React from 'react'
import { Post } from '../types'

interface Props {
  post: Post
}

const CommentList: React.FC<Props> = ({ post }) => {
  console.log('POST:', post)
  return (
    <div>
      <h2>Comments</h2>
    </div>
  )
}

export default CommentList
