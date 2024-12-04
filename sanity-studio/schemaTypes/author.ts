import {defineType, defineField} from 'sanity'

export const author = defineType({
  title: 'Author',
  name: 'author',
  type: 'document',
  fields: [
    defineField({
      title: 'Full name',
      name: 'full_name',
      type: 'string',
    }),
    defineField({
      title: 'Short bio',
      name: 'short_bio',
      type: 'text',
    }),
    defineField({
      title: 'Avatar',
      name: 'avatar',
      type: 'image',
    }),
  ],
})
