<script setup>
import { inject } from "vue";

defineProps({
  quiz: Object,
});

const { name, changeName } = inject("name");
</script>

<template>
  <div>
    <h5>{{ name }}</h5>
    <button @click="changeName">Change Name</button>
    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
