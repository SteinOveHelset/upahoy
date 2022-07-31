<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="py-6 px-8 bg-gray-800 flex items-center justify-between text-white">
      <div class="menu-left">
        <RouterLink :to="{'name': 'home'}" class="text-xl text-white">Upahoy</RouterLink>
      </div>

      <div class="menu-right space-x-4">
        <RouterLink :to="{'name': 'pricing'}" class="text-white">Pricing</RouterLink>
        <a href="#" class="px-4 py-2 bg-cyan-400 rounded-xl">Sign up</a>
        <a href="#" class="px-4 py-2 bg-gray-600 rounded-xl">Log in</a>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>

    <footer class="py-12 px-8 flex justify-between bg-gray-800 text-white">
      <div class="footer-left">
        <h3 class="mb-5 text-xl">Upahoy</h3>

        <p class="text-sm">
          Lorem ipsum bla bal bla orem ipsum bla bal bla orem ipsum bla bal bla
        </p>
      </div>

      <div class="w-1/2 footer-right">
        <h3 class="mb-5 text-xl">Menu</h3>

        <div class="flex flex-col space-y-4">
          <RouterLink :to="{'name': 'about'}">About</RouterLink>
          <a href="#">Contact</a>
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
