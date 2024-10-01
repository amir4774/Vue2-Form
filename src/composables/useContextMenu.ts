import { ref } from "vue";

const useContextMenu = () => {
  const showMenu = ref(false);
  const clientX = ref(0);
  const clientY = ref(0);

  const setCoordinate = (event: MouseEvent) => {
    clientX.value = event.clientX;
    clientY.value = event.clientY;
    showMenu.value = true;
  };

  const hideMenu = () => {
    showMenu.value = false;
  }

  return { hideMenu, setCoordinate, clientX, clientY, showMenu };
};

export default useContextMenu;
