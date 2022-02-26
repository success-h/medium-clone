import React from 'react'
import { Post } from '../types'

interface Props {
  post: Post
}

const CommentList: React.FC<Props> = ({ post }) => {
  console.log('POST:', post)
  return (
    <div className="mx-5 mt-10 border p-5 hover:shadow-sm hover:shadow-green-500 sm:mx-auto">
      <h2 className="py-3 font-sans text-2xl font-bold">Comments</h2>
      <hr />
      {post.comments.map((comment) => (
        <div className="flex w-full justify-between gap-10" key={comment._id}>
          <h3 className="text-green-900 sm:text-xl">{comment.name}:</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
