import { ref, watch } from "vue";

export function useStorage(key, defaultValue) {
  const storedValue = localStorage.getItem(key);

  let val = "";

  if (storedValue) {
    val = ref(storedValue);
  } else {
    val = ref(defaultValue);
    write();
  }

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
