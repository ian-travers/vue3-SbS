<script setup>
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";

const { flash } = useFlash();

const food = useStorage("food");
const age = useStorage("age");

function onTabPress(e) {
  const textarea = e.target;

  const val = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
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
      <textarea
        @keydown.tab.prevent="onTabPress"
        style="width: 100%; height: 250px"
      >Hi there</textarea>
    </div>
  </main>
</template>

<style scoped>
.mt-6 {
  margin-top: 3rem;
}
</style>
