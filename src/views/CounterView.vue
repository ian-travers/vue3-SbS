<template>
  <div>
    <h2>Counter View</h2>
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()" :disabled="!counter.remaining">
      Increment ({{ counter.remaining }})
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/CounterStore";

const counter = useCounterStore();
</script>
