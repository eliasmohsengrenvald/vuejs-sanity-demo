<template>
  <header class="fixed top-0 w-full bg-gray-900 text-gray-300 p-4 z-10">
    <nav class="flex justify-between" aria-label="Main Navigation">
      <h1>Whisker Weekly</h1>
      <ul class="flex space-x-4">
        <li>
          <router-link :to="`/`" class="hover:underline">Home</router-link>
        </li>
        <li>
          <router-link :to="`/news`" class="hover:underline">News</router-link>
        </li>
        <li>
          <router-link :to="`/authors`" class="hover:underline">Authors</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main class="pt-10 flex-grow overflow-y-auto">
    <RouterView></RouterView>

    <footer class="bg-gray-800 text-white text-center p-4">Made by Elias with ❤️</footer>
  </main>
</template>
