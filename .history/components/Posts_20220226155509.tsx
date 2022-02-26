import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

import { Post } from '../types'

interface Props {
  posts: [Post]
}

const Posts: React.FC<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Medium Clone - Post</title>
      <meta
        name="Medium clone - Success Hycenth"
        content={`${posts
          .map((post) => post.description)
          .slice(0, 100)
          .concat('...')}`}
      />
      <meta
        property={`${posts.map((post) => post.description.slice(0, 100))}`}
        content={`${posts.map((post) => post.title.slice(0, 100))}`}
      />
      <meta property="og:url" content="https://snipcart.com/" />
      <meta property="og:type" content="website" />
    </Head>
    <div className="mx-auto my-4 flex max-w-screen-xl flex-col items-center gap-5 overflow-hidden md:grid md:grid-cols-2 md:place-items-center md:gap-3 lg:grid-cols-3 lg:gap-6">
      {posts.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
          <div className="group w-80 cursor-pointer overflow-hidden rounded-lg border hover:shadow-lg sm:w-96">
            <img
              className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              alt={post.title}
              src={urlFor(post.mainImage).url()}
            />
            <div className="z-20 flex justify-between bg-white p-5">
              <div className="">
                <h1 className="text-lg font-bold">
                  {post.title.slice(0, 29).concat('...')}
                </h1>
                <p className="text-xs">
                  {post.description.slice(0, 60).concat('...')}
                </p>
              </div>
              <img
                style={{
                  width: '50px',
                  height: '50px',
                }}
                className="max-h-50 max-w-12 rounded-full"
                alt={post.author.name}
                src={urlFor(post.author.image).url()!}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </>
)

export default Posts
