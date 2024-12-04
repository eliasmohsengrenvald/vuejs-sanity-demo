<template>
  <main class="authors-page">
    <section class="container mx-auto p-4">
      <h1 class="text-2xl mb-8">Authors</h1>

      <div class="grid md:grid-cols-3 gap-4">
        <AuthorCard v-for="(author, i) in authors" :key="i" :author="author" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCmsStore } from '../stores/cms'
import AuthorCard from '../components/AuthorCard.vue'

const store = useCmsStore()
const authors = computed(() => store.authors)
store.fetchAuthors()
</script>
