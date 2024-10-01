import { ref } from "vue";

const useContextMenu = () => {
  const clientX = ref(0);
  const clientY = ref(0);

  const setCoordinate = (event: MouseEvent) => {
    clientX.value = event.clientX;
    clientY.value = event.clientY;
  };

  return { setCoordinate, clientX, clientY };
};

export default useContextMenu;
