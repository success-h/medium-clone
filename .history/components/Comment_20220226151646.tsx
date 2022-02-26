import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Post } from '../types'
import CommentList from './CommentList'

interface IFormInput {
  _id?: string
  name?: string
  email?: string
  comment?: string
}

interface Props {
  post: Post
}

type IComment = boolean

const Comment: React.FC<Props> = ({ post }) => {
  const { _id } = post
  const [submitted, setSubmitted] = React.useState<IComment>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { name, email, comment } = data
    console.log('data:', _id)
    fetch('/api/createcomment', {
      method: 'POST',
      body: JSON.stringify({ _id, name, email, comment }),
    })
      .then(() => {
        setSubmitted(true)
        console.log(data)
      })
      .catch((err) => {
        console.log('err:', err)
        setSubmitted(false)
      })
  }

  return (
    <div className="mx-auto my-10 max-w-2xl">
      <div className="mx-5 sm:mx-0">
        <hr className="mt-3 py-3" />
        <h2 className="text-lg text-green-500">Enjoyed the article?</h2>
        <h1 className="text-2xl font-bold">Leave a comment bellow!</h1>
        <hr className="mt-3 py-3" />
        {submitted ? (
          <div className="flex w-full flex-col items-center border p-5 hover:shadow-lg sm:p-10">
            <h3 className="text-3xl font-bold text-green-600 ">
              Thank You for submittng your comment!
            </h3>
            <div className="mt-3 text-xl">
              Once it has been approved, it will apear bellow
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full space-y-7"
          >
            <label className="flex flex-col">
              <span>Name</span>
              <input
                type="text"
                {...register('name', { required: true })}
                className="h-11 border px-2 outline-none focus:outline-sky-400"
                placeholder="Name"
              />
            </label>
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
            <label className="flex  flex-col">
              <span>Email</span>
              <input
                type="email"
                {...register('email', { required: true })}
                className="h-11 border px-2 outline-none focus:outline-sky-400"
                placeholder="Name"
              />
            </label>
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            <label className="flex flex-col">
              <span>Write a comment</span>
              <textarea
                placeholder="Your comment here"
                {...register('comment', { required: true })}
                className="h-44 border p-3 outline-none focus:outline-sky-400"
              />
            </label>
            {errors.comment && (
              <span className="text-red-500">Comment is required</span>
            )}

            <input
              type="submit"
              className="focus:shadow-outline cursor-pointer rounded bg-sky-900 py-4 font-semibold text-white hover:bg-green-400 focus:outline-none"
            />
          </form>
        )}
      </div>
      <CommentList post={post} />
    </div>
  )
}

export default Comment
