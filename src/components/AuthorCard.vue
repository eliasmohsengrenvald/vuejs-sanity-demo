<template>
  <div
    :data-cy="author.full_name"
    class="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 text-center flex flex-col justify-between h-full"
  >
    <div>
      <img
        :src="createURL(author.avatar, 300, 300)"
        class="inline-block rounded-full w-32 h-32 mb-4"
      />
      <h3 class="text-xl font-bold mb-4">{{ author.full_name }}</h3>
      <p class="text-gray-400 mb-4 text-justify overflow-auto truncate">
        {{ author.short_bio }}
      </p>
    </div>
    <router-link
      :data-cy="`${author.full_name}-readmore`"
      data
      :to="`/author/${author._id}`"
      class="btn mt-auto hover:underline"
      >Profile</router-link
    >
  </div>
</template>

<script lang="ts" setup>
import { createURL } from '../utils'

defineProps({
  author: {
    type: Object,
    required: true,
  },
})
</script>
