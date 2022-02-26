import React from 'react'
import { Post } from '../types'

interface Props {
  post: Post
}

const CommentList: React.FC<Props> = ({ post }) => {
  console.log('POST:', post)
  return (
    <div className="mt-10">
      <h2 className="text-3xl">Comments</h2>
      <hr />
      {post.comments.map((comment) => (
        <div key={comment._id}>
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList