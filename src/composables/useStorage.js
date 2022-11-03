import { ref, watch } from "vue";

export function useStorage(key) {
  const storedValue = localStorage.getItem(key);
  const val = ref(storedValue);

  function write() {
    localStorage.setItem(key, val.value);
  }

  watch(val, () => {
    if (val.value === "") {
      localStorage.removeItem(key);
    } else {
      write();
    }
  });

  return val;
}
