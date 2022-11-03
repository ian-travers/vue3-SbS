<script setup>
import { ref, watch } from "vue";

import { useFlash } from "@/composables/useFlash";

const { flash } = useFlash();

const food = ref(localStorage.getItem("food"));
const age = ref(localStorage.getItem("age"));

watch(food, (val) => {
  write("food", val);
});

watch(age, (val) => {
  write("age", val);
});

function write(key, val) {
  localStorage.setItem(key, val);
}
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
        <input type="text" v-model="food" @input="write('food', food)" />
      </p>
      <p>
        How old are you?
        <input type="text" v-model="age" @input="write('age', age)" />
      </p>
    </div>
  </main>
</template>
