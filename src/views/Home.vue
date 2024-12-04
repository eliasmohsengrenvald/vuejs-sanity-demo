<template>
  <img
    src="https://cdn.pixabay.com/photo/2024/03/08/09/55/cat-8620369_1280.png"
    alt="Banner hygge cat!"
    class="app-banner w-full object-cover"
  />

  <section class="p-8 text-center">
    <h2 class="text-2xl font-bold mb-4">Welcome to Whisker Weekly!</h2>
    <p class="text-justify mb-4">
      Welcome to Purrfect Headlines! At Purrfect Headlines, we are dedicated to bringing you the
      latest and greatest in the world of cats. Whether you’re a lifelong cat lover or a new feline
      enthusiast, our website is your go-to source for all things cat-related. From heartwarming
      stories and viral videos to expert advice and health tips, we’ve got it all covered. Our
      mission is to celebrate the joy and companionship that cats bring into our lives. We aim to
      provide a platform where cat owners and admirers can come together to share their experiences,
      learn from each other, and stay informed about the latest trends and news in the feline world.
    </p>
    <p class="text-justify mb-4">
      Stay up-to-date with the latest cat news from around the globe, get expert advice on cat care,
      nutrition, and health, and learn tips and tricks for training your cat and understanding their
      behavior. Our articles cover a wide range of topics to help you keep your feline friend happy
      and healthy. Find the best products for your cat with our in-depth reviews, and join our
      vibrant community of cat lovers to share your stories, photos, and videos, and connect with
      other cat enthusiasts from around the world.
    </p>

    <p class="text-justify mb-4">
      At Purrfect Headlines, we are passionate about cats and committed to providing high-quality,
      reliable information. Our team of writers and experts are dedicated to bringing you the best
      content, so you can enjoy a purrfectly delightful experience every time you visit our site.
      Join us today and become a part of the Purrfect Headlines family. Let’s celebrate the
      wonderful world of cats together!
    </p>
  </section>

  <!-- News Section -->
  <section class="bg-gray-500 p-8">
    <h2 class="text-2xl font-bold mb-4 text-white">Latest News</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <PostCard v-for="(post, i) in store.sortedPosts" :key="i" :post="post" :is-compact="true" />
    </div>
  </section>

  <!-- Two Columns Section -->
  <section class="grid grid-cols-1 md:grid-cols-2">
    <div class="p-8">
      <h2 class="text-2xl font-bold text-justify mb-4">About Us</h2>
      <p class="mb-4">
        The cat (Felis catus), also referred to as domestic cat or house cat, is a small
        domesticated carnivorous mammal. It is the only domesticated species of the family Felidae.
        Advances in archaeology and genetics have shown that the domestication of the cat occurred
        in the Near East around 7500 BC. It is commonly kept as a pet and farm cat, but also ranges
        freely as a feral cat avoiding human contact. Valued by humans for companionship and its
        ability to kill vermin, the cat's retractable claws are adapted to killing small prey such
        as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its
        night vision and sense of smell are well developed. It is a social species, but a solitary
        hunter and a crepuscular predator. Cat communication includes vocalizations—including
        meowing, purring, trilling, hissing, growling, and grunting—as well as body language. It can
        hear sounds too faint or too high in frequency for human ears, such as those made by small
        mammals. It secretes and perceives pheromones.
      </p>

      <p class="mb-4">
        As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6
        million cats owned and around 42 million households owning at least one cat. In the United
        Kingdom, 26% of adults have a cat, with an estimated population of 10.9 million pet cats as
        of 2020. As of 2021, there were an estimated 220 million owned and 480 million stray cats in
        the world.
      </p>

      <p>
        Female domestic cats can have kittens from spring to late autumn in temperate zones and
        throughout the year in equatorial regions, with litter sizes often ranging from two to five
        kittens. Domestic cats are bred and shown at events as registered pedigreed cats, a hobby
        known as cat fancy. Animal population control of cats may be achieved by spaying and
        neutering, but their proliferation and the abandonment of pets has resulted in large numbers
        of feral cats worldwide, contributing to the extinction of bird, mammal, and reptile
        species.
      </p>
    </div>

    <img
      src="https://cdn.pixabay.com/photo/2023/01/21/02/40/cat-7732877_1280.jpg"
      alt="About Us"
      class="w-full h-full object-cover object-bottom brightness-50"
    />
  </section>
</template>

<script lang="ts" setup>
import { useCmsStore } from '../stores/cms'
import PostCard from '../components/PostCard.vue'

const store = useCmsStore()
store.fetchPosts(3)
</script>
