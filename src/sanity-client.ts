import { createClient, SanityClient } from '@sanity/client'
export const sanityClient: SanityClient = createClient({
  projectId: process.env
    ? process.env.VITE_SANITY_PROJECT_ID
    : import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env ? process.env.VITE_SANITY_DATASET : import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env
    ? process.env.VITE_SANITY_API_VERSION
    : import.meta.env.VITE_SANITY_API_VERSION,
})

export default sanityClient
