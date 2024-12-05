import { createClient, SanityClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || process.env.VITE_SANITY_DATASET
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || process.env.VITE_SANITY_API_VERSION

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
})

export default sanityClient
