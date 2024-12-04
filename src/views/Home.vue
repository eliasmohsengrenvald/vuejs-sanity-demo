<template>
  <img
    src="https://cdn.pixabay.com/photo/2024/03/08/09/55/cat-8620369_1280.png"
    alt="Banner hygge cat!"
    class="banner w-full object-cover"
  />

  <section class="p-8 text-center bg-gray-900 text-gray-300">
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
  <section class="bg-blue-900 text-white p-8">
    <h2 class="text-2xl font-bold mb-4">Latest News</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white text-black p-4 rounded">News 1</div>
      <div class="bg-white text-black p-4 rounded">News 2</div>
      <div class="bg-white text-black p-4 rounded">News 3</div>
    </div>
  </section>

  <!-- Two Columns Section -->
  <section class="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 class="text-2xl font-bold mb-4">About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam.
      </p>
    </div>
    <div>
      <img
        src="https://images.pexels.com/photos/10619952/pexels-photo-10619952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="About Us"
        class="w-full object-cover"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.banner {
  height: 600px;
}
</style>
