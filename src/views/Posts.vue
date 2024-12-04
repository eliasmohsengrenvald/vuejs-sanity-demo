<template>
  <section class="container mx-auto p-4">
    <h1 class="text-2xl mb-8">Latest posts</h1>

    <div class="grid gap-4">
      <PostCard v-for="(post, i) in store.sortedPosts" :key="i" :post="post" />
    </div>

    <button
      v-if="store.totalPosts > store.posts?.length"
      @click="store.loadMorePosts(6)"
      class="btn mt-8"
    >
      Load more
    </button>
  </section>
</template>

<script lang="ts" setup>
import sanity from '../sanity-client'
import { useCmsStore } from '../stores/cms'
import PostCard from '../components/PostCard.vue'
import { onUnmounted, ref } from 'vue'

const subscription = ref()
const store = useCmsStore()
store.fetchPosts(6)

const query = '*[_type == "post"]'

subscription.value = sanity.listen(query).subscribe((update) => {
  switch (update.transition) {
    case 'update':
      sanity.getDocument(update.result.author._ref).then((author) => {
        store.updatePost({
          ...update.result,
          author,
        })
      })
      break

    case 'appear':
      sanity.getDocument(update.result.author._ref).then((author) => {
        store.addNewPost({
          ...update.result,
          author,
        })
      })
      break

    case 'disappear':
      store.removePost(update.documentId)
      break
  }
})

onUnmounted(() => {
  subscription.value.unsubscribe()
})
</script>
