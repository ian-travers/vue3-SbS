<script>
export default {
  methods: {
    flash(text) {
      alert(text);
    },
  },
};
</script>

<template>
  <main>
    <button @click="flash('It Works!')">Click Me</button>
  </main>
</template>
