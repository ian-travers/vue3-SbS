<script>
import flash from "@/mixins/flash";

export default {
  mixins: [flash],
};
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('It Works from About page!')">Click Me</button>
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
