<script setup>
import { provide, ref } from "vue";

import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";

defineProps({
  quiz: Object,
});

const name = ref("John Doe");

provide("name", {
  name,
  changeName: () => (name.value = "Name has been changed!"),
});
</script>

<template>
  <h2>{{ name }}</h2>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter :quiz="quiz" />
</template>
