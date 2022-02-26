import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Post } from '../../types'

interface IFormInput {
  _id?: string
  name?: string
  email?: string
  comment?: string
}

interface Props {
  post: Post
}

const Comment: React.FC<Props> = ({ post }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch('/api/createcomment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }

  return (
    <div className="mx-auto my-10 max-w-2xl">
      <div className="mx-5 sm:mx-0">
        <hr className="mt-3 py-3" />
        <h2 className="text-lg text-green-500">Enjoyed the article?</h2>
        <h1 className="text-2xl font-bold">Leave a comment bellow!</h1>
        <hr className="mt-3 py-3" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full space-y-7"
        >
          <label className="flex flex-col">
            <span>Name</span>
            <input
              type="text"
              {...register('name', { required: true })}
              className="h-11 border px-2 outline-none focus:outline-green-400"
              placeholder="Name"
            />
          </label>
          <label className="flex  flex-col">
            <span>Email</span>
            <input
              type="email"
              {...register('email', { required: true })}
              // value={}
              className="h-11 border px-2 outline-none focus:outline-green-400"
              placeholder="Name"
            />
          </label>
          <label className="flex flex-col">
            <span>Write a comment</span>
            <textarea
              placeholder="Your comment here"
              {...register('comment', { required: true })}
              className="h-44 border p-3 outline-none focus:outline-green-400"
            />
          </label>

          {/* errors will return when field validation fails */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">Comment is required</span>
            )}
          </div>

          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer rounded bg-green-500 py-4 font-semibold hover:bg-green-400 focus:outline-none"
          />
        </form>
      </div>
    </div>
  )
}

export default Comment
