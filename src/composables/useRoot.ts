import { ref } from "vue";
import useId from "./useId";
import type { FileType, FoldersType } from "@/Types";

const useRoot = () => {
  const root = ref<(FoldersType | FileType)[]>([]);

  const addRootFolder = (folderName: string) => {
    if (!folderName) return;
    const id = useId();

    root.value.push({
      id,
      children: [],
      isOpen: false,
      name: folderName,
    });
  };

  const addRootFile = (fileName: string) => {
    if (!fileName) return;
    const id = useId();

    root.value.push({
      id,
      name: fileName,
    });
  };

  const deleteFileOrFolder = (
    items: (FoldersType | FileType)[],
    idToDelete: number
  ) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === idToDelete) {
        // Delete the element from the array
        items.splice(i, 1);
        return true;
      }

      // If it's a folder and has children, check recursively
      if (
        "children" in items[i] &&
        Array.isArray((items[i] as FoldersType).children)
      ) {
        const folder = items[i] as FoldersType;
        const found = deleteFileOrFolder(folder.children, idToDelete);
        if (found) {
          return true;
        }
      }
    }
    return false;
  };

  return {
    root,
    addRootFolder,
    addRootFile,
    deleteFileOrFolder,
  };
};

export default useRoot;
