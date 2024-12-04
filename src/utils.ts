import sanity from './sanity-client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanity)

export const CreateURL = (source: string, width = 300, height = 300) => {
  return builder.image(source).width(width).height(height).url()
}

export const TextToHTML = (text: string) => {
  return text.replace(/\n/g, '<br>')
}

export const FormatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
