import { inject, watch } from "vue";
import type { contextMenuStatesType, FoldersType } from "@/Types";

const useContextMenuFolder = (
  folder: FoldersType,
  deleteItem: (id: number) => void
) => {
  const getContextMenuState = inject("getContextMenuState") as (
    id: number
  ) => contextMenuStatesType;
  const contextMenuStates = getContextMenuState(folder.id);

  watch(
    () => contextMenuStates.isDeleting,
    (newVal) => {
      if (newVal) {
        deleteItem(folder.id);
        contextMenuStates.isDeleting = false; // Reset the deletion state
      }
    }
  );

  watch(
    () =>
      contextMenuStates.isAddFileToFolder ||
      contextMenuStates.isAddFolderToFolder,
    () => {
      folder.isOpen = true; // Set the folder as open when either state is true
    }
  );
};

export default useContextMenuFolder;
