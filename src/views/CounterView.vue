<template>
  <div>
    <h2>Counter View</h2>
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<script setup>
import { counter } from "@/stores/counterStore";
</script>
