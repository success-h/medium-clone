import React from 'react'
import { Post } from '../types'

interface Props {
  post: Post
}

const CommentList: React.FC<Props> = ({ post }) => {
  console.log('POST:', post)
  return (
    <div className="hover:shadow-green mt-10 border p-5">
      <h2 className="py-3 font-sans text-2xl font-bold">Comments</h2>
      <hr />
      {post.comments.map((comment) => (
        <div className="flex w-full justify-between" key={comment._id}>
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList