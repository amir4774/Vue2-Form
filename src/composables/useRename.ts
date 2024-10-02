import { inject, ref } from "vue";
import type { contextMenuStatesType } from "@/Types";

const useRename = (initialValue?: string) => {
  const contextMenuStates = inject(
    "contextMenuStates"
  ) as contextMenuStatesType;

  const renameValue = ref(initialValue);

  const hideForm = () => {
    contextMenuStates.isRename = false;
  };

  return { renameValue, hideForm };
};

export default useRename;
