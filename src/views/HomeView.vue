<script setup>
import { useFlash } from "@/composables/useFlash";

const { flash } = useFlash();
</script>

<template>
  <main>
    <button @click="flash('It\'s Home', 'It Works!', 'info')">Click Me</button>
  </main>
</template>
