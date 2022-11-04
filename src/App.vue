<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="text-center space-x-6 leading-5 my-6">
      <RouterLink
        class="bg-green-200 hover:bg-green-300 border rounded px-3 py-1"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="bg-green-200 hover:bg-green-300 border rounded px-3 py-1"
        to="/about"
        >About</RouterLink
      >
      <RouterLink
        class="bg-green-200 hover:bg-green-300 border rounded px-3 py-1"
        to="/counter"
        >Counter</RouterLink
      >
      <RouterLink
        class="bg-green-200 hover:bg-green-300 border rounded px-3 py-1"
        to="/team"
        >Team</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
