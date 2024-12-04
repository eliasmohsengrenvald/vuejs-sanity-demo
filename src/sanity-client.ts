import { createClient, SanityClient } from '@sanity/client'

console.log('sss', process.env.VITE_SANITY_PROJECT_ID)

export const sanityClient: SanityClient = createClient({
  projectId: import.meta.env.PROD
    ? process.env.VITE_SANITY_PROJECT_ID
    : import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.PROD
    ? process.env.VITE_SANITY_DATASET
    : import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: import.meta.env.PROD
    ? process.env.VITE_SANITY_API_VERSION
    : import.meta.env.VITE_SANITY_API_VERSION,
})

export default sanityClient
