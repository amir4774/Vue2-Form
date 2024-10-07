import { onMounted, ref } from "vue";

const useRef = () => {
  const myInput = ref<HTMLInputElement | null>(null);

  onMounted(() => {
    if (myInput.value) {
      myInput.value.focus();
    }
  });

  return { myInput };
};

export default useRef;
