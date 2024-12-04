<template>
  <img :src="CreateURL(post.image)" class="app-banner w-full object-cover mb-8" />
  <section v-if="post" class="container mx-auto p-4">
    <button
      @click="$router.back()"
      class="flex items-center text-lg text-green-500 hover:text-green-600 duration-300 mb-4"
    >
      <span class="mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M15.707 19.707a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L9.414 12l6.293 6.293a1 1 0 010 1.414z"
          />
        </svg>
      </span>
      <span class="text-lg">Back</span>
    </button>

    <h1 class="text-3xl md:text-5xl mb-8">{{ post.title }}</h1>

    <p class="text-gray-500 italic mb-8">{{ post.excerpt }}</p>

    <p v-html="TextToHTML(post.content)" class="text-lg mb-8"></p>

    <router-link
      :to="`/author/${post.author._id}`"
      class="inline-flex items-center mb-4"
      v-if="post.author"
    >
      <img
        :src="CreateURL(post.author.avatar, 300, 300)"
        class="inline-block rounded-full w-10 h-10 mr-4"
      />

      <h1 class="text-gray-500">
        {{ post.author.full_name }}
      </h1>
    </router-link>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import sanity from '../sanity-client'
import { CreateURL, TextToHTML } from '../utils'

const route = useRoute()
const id = ref(route.params.id)
const post = ref(null)

const query = '*[_type == "post" && _id == $id][0] { ..., author-> }'
const params = { id: id.value }

sanity.fetch(query, params).then((data) => (post.value = data))
</script>
