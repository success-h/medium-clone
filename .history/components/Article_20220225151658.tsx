import Image from 'next/image'
import { urlFor } from '../../sanity'
import { Post } from '../../types'
import PortableText from 'react-portable-text'
import React from 'react'

interface Props {
  post: Post
}

export const Article: React.FC<Props> = ({ post }) => {
  return (
    <article className="mx-auto max-w-3xl p-5">
      <h1 className="mt-10 mb-3 text-3xl font-bold">{post.title}</h1>
      <h2 className="text-lg text-gray-500">{post.description}</h2>

      <div className="my-5 mx-auto flex items-center justify-between space-x-5 rounded-lg border py-3 px-3">
        <div className="my-auto rounded-full">
          <Image
            height={50}
            width={50}
            objectFit="cover"
            className="h-14 w-14 rounded-full "
            src={urlFor(post.author.image).url()!}
            alt={post.title}
          />
        </div>
        <p className="text-md font-extralight">
          Blog post by{' '}
          <span className="text-green-600">{post.author.name}</span> - Published
          at {new Date(post._createdAt).toLocaleString()}
        </p>
      </div>

      <div className="mt-10">
        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          content={post.body}
          serializers={{
            h1: (props: any) => (
              <h2 className="my-5 text-2xl font-bold" {...props} />
            ),
            h2: (props: any) => (
              <h1 className="my-10 text-lg text-gray-700" {...props} />
            ),
            li: ({ children }: any) => (
              <li className="ml-4 list-disc">{children}</li>
            ),
            link: ({ href, children }: any) => (
              <a href={href} className="text-slate-800 hover:underline">
                {children}
              </a>
            ),
          }}
        />
      </div>
    </article>
  )
}
