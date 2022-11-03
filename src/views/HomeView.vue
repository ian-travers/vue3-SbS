<script setup>
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";

const { flash } = useFlash();

const food = useStorage("food");
const age = useStorage("age");
</script>

<template>
  <main>
    <div>
      <button @click="flash('It\'s Home', 'It Works!', 'info')">
        Click Me
      </button>
    </div>
    <div>
      <p>
        What is your favorite food?
        <input type="text" v-model="food" />
      </p>
      <p>
        How old are you?
        <input type="text" v-model="age" />
      </p>
    </div>
  </main>
</template>
