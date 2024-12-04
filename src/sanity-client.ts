import { createClient, SanityClient } from '@sanity/client'

export const sanityClient: SanityClient = createClient({
  projectId: '<token>',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'api',
})

export default sanityClient
