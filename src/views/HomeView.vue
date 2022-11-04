<script setup>
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";
import { ref } from "vue";

import TabbableTextarea from "@/components/TabbableTextarea.vue";
import Quiz from "@/components/Quiz/Quiz.vue";

const { flash } = useFlash();

const food = useStorage("food");
const age = useStorage("age");

const comment = ref("test comment");
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
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </div>

    <div class="mt-6">
      <Quiz />
    </div>
  </main>
</template>

<style scoped>
.mt-6 {
  margin-top: 3rem;
}
</style>
