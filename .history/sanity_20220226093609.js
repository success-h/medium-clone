import { createClient, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

export const config = {
  // The projectId and datasetId can be found in the project's settings.

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',

  useCdn: process.env.NODE_ENV === 'production',
}
export const sanityClient = sanityClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
const useCurrentUser = createCurrentUserHook(config)
