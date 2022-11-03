<script setup>
import { useFlash } from "@/composables/useFlash";

const { flash } = useFlash();
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('Yep', 'It Works from About page!')">
        Click Me
      </button>
    </p>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
