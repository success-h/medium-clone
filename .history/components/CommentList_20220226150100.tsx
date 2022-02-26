import React from 'react'
import { Post } from '../types'

interface Props {
  post: Post
}

const CommentList: React.FC<Props> = ({ pos }) => {
  console.log('POST:', post)
  return <div>CommentList</div>
}

export default CommentList
