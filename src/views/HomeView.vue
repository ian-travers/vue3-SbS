<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
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
    <div class="mt-6">
      <p>
        What is your favorite food?
        <input type="text" v-model="food" />
      </p>
      <p>
        How old are you?
        <input type="text" v-model="age" />
      </p>
    </div>
    <div class="mt-6">
      <TabbableTextarea style="width: 100%; height: 300px" />
    </div>
  </main>
</template>

<style scoped>
.mt-6 {
  margin-top: 3rem;
}
</style>
