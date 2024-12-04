import sanity from './sanity-client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanity)

export const createURL = (source: string, width?: number, height?: number) => {
  if (!width || !height) return builder.image(source).url()
  return builder.image(source).width(width).height(height).url()
}

export const textToHTML = (text: string) => {
  return text.replace(/\n/g, '<br>')
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
