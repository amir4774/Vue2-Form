import type { contextMenuStatesType } from "@/Types";
import { reactive } from "vue";

export const useContextMenuStore = () => {
  const contextMenuStates = reactive<Record<number, contextMenuStatesType>>({});

  const getContextMenuState = (id: number) => {
    if (!contextMenuStates[id]) {
      // Initialize state for the specific file/folder by ID
      contextMenuStates[id] = {
        isAddingFolder: false,
        isAddingFile: false,
        isRename: false,
        isDeleting: false,
        file_folder_name: "",
      };
    }
    return contextMenuStates[id];
  };

  return {
    getContextMenuState,
    contextMenuStates,
  };
};
