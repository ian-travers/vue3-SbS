import { ref, watch } from "vue";

export function useStorage(key, defaultValue = null) {
  const storedValue = read();

  let val = "";

  if (storedValue) {
    val = ref(storedValue);
  } else {
    val = ref(defaultValue);
    write();
  }

  watch(val, write, { deep: true });

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  function write() {
    if (val.value === null || val.value === "") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(val.value));
    }
  }

  return val;
}
