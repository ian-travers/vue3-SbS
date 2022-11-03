<script setup>
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
  <textarea @keydown.tab.prevent="onTabPress" />
</template>
