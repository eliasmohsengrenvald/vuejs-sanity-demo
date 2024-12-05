<template>
  <div
    :class="[
      'bg-gray-800',
      ' hover:bg-gray-700',
      'rounded-lg',
      'p-4',
      'flex',
      'flex-col',
      { 'sm:flex-row': !isCompact },
    ]"
  >
    <img
      v-if="post.image"
      :src="createURL(post.image, 480, 320)"
      :class="[
        'block',
        'w-full',
        'mr-4',
        'object-cover',
        'mb-4',
        { 'sm:mb-0': !isCompact },
        { 'sm:max-w-xs': !isCompact },
      ]"
    />
    <div class="flex-1 flex flex-col">
      <h3 class="text-lg md:text-2xl font-bold mb-4">{{ post.title }}</h3>

      <p class="text-gray-500 md:text-lg mb-4 flex-1">
        {{ post.excerpt }}
      </p>

      <div class="flex sm:flex-col md:flex-row justify-between items-start md:items-end">
        <div class="flex items-center sm:mb-4 md:mb-0">
          <img
            v-if="post.author.avatar"
            :src="createURL(post.author.avatar, 300, 300)"
            class="rounded-full mr-4 w-12 h-12"
          />
          <div>
            <p class="text-white mr-4">{{ post.author.full_name }}</p>
            <p class="text-gray-500 text-sm">{{ formatDate(post._createdAt) }}</p>
          </div>
        </div>

        <router-link :to="`/post/${post._id}`" class="btn hover:underline">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createURL, formatDate } from '../utils'

defineProps({
  post: {
    type: Object,
    required: true,
  },
  isCompact: {
    type: Boolean,
    default: false,
  },
})
</script>
