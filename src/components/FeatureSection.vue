<!-- src/components/FeatureSection.vue -->
<template>
  <v-container class="my-5">
    <v-row>
      <v-col cols="12" md="4" v-for="(feature, index) in features" :key="index">
        <v-card>
          <v-img :src="feature.image" height="200px"></v-img>
          <v-card-title>{{ feature.title }}</v-card-title>
          <v-card-text>{{ feature.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const features = [
  {
    title: 'Feature One',
    description: 'Description of feature one.',
    image: 'https://source.unsplash.com/random/400x200?feature1',
  },
  {
    title: 'Feature Two',
    description: 'Description of feature two.',
    image: 'https://source.unsplash.com/random/400x200?feature2',
  },
  {
    title: 'Feature Three',
    description: 'Description of feature three.',
    image: 'https://source.unsplash.com/random/400x200?feature3',
  },
]
</script>

<style scoped></style>
