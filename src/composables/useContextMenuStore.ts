import { reactive } from "vue";

export const useContextMenuStore = () => {
  const contextMenuStates = reactive({
    isAddingFolder: false,
    isAddingFile: false,
    isRename: false,
    file_folder_name: "",
  });

  return {
    contextMenuStates,
  };
};
