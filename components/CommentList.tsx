import React from 'react'
import { Post } from '../types'

interface Props {
  post: Post
}

const CommentList: React.FC<Props> = ({ post }) => {
  return (
    <div className="mx-5 mt-10 border p-5 hover:shadow-sm hover:shadow-sky-500 sm:mx-auto">
      <h2 className="py-3 font-sans text-2xl font-bold">Comments</h2>
      <hr />
      {post.comments.map((comment) => (
        <div className="my-5 flex w-full justify-between" key={comment._id}>
          <h3 className="text-sky-900 sm:text-xl">{comment.name}:</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
