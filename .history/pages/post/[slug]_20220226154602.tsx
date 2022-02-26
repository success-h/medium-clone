import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import { Article } from '../../components/Article'
import Comment from '../../components/Comment'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../types'

interface Props {
  post: Post
}

const Post = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>Medium Clone - Post</title>
        <meta
          name="Medium clone - Success Hycenth"
          content={`${post.description.slice(0, 100)}`}
        />
        <meta
          property={`${post.title.slice(0, 100)}`}
          content={`${post.description.slice(0, 100).concat('...')}`}
        />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <img
        src={urlFor(post.mainImage).url()!}
        className="h-40 w-full object-cover object-center"
        alt={post.title}
      />
      <Article post={post} />
      <Comment post={post} />
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
      _id,
      slug {
        current
      }
    }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == 'my-travels'][0]{
      _id,
      _createdAt,
      title,
      author -> {
        name,
        image
      },
      "comments":*[
        _type == "comment" && 
        post._ref == ^._id &&
        approved == true
      ],
      description,
      mainImage,
      slug,
      body
    }`

  const post = await sanityClient.fetch(query, { slug: params?.slug! })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60, //updates after 60 seconds
  }
}
