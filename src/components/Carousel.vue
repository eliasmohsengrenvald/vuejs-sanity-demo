<template>
  <div class="relative w-full overflow-hidden">
    <div class="carousel">
      <div
        class="carousel-item w-full"
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="app-banner w-full object-cover brightness-75"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  images: Array,
})

const currentIndex = ref(0)

setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}, 4000)
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
}
</style>
