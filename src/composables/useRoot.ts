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

  const addFileToFolder = (
    folderId: number,
    fileName: string,
    items?: (FoldersType | FileType)[]
  ) => {
    const id = useId();
    const newFile: FileType = { name: fileName, id };

    const root_items = items ?? root.value;

    search(newFile, root_items, folderId, fileName, addFileToFolder);

    return false;
  };

  const addFolderToFolder = (
    folderId: number,
    folderName: string,
    items?: (FoldersType | FileType)[]
  ) => {
    const id = useId();
    const newFolder: FoldersType = {
      name: folderName,
      id,
      children: [],
      isOpen: false,
    };

    const root_items = items ?? root.value;

    search(newFolder, root_items, folderId, folderName, addFolderToFolder);

    return false;
  };

  const search = (
    newItem: FoldersType | FileType,
    root_items: (FoldersType | FileType)[],
    folderId: number,
    name: string,
    callBack: (
      folderId: number,
      name: string,
      items: (FoldersType | FileType)[]
    ) => boolean
  ) => {
    for (let i = 0; i < root_items.length; i++) {
      if (root_items[i].id === folderId) {
        // Add element to folder
        const selectedFolder = root_items[i] as FoldersType;
        selectedFolder.children.push(newItem);
        return true;
      }

      // If it's a folder and has children, check recursively
      if (
        "children" in root_items[i] &&
        Array.isArray((root_items[i] as FoldersType).children)
      ) {
        const folder = root_items[i] as FoldersType;
        const found = callBack(folderId, name, folder.children);
        if (found) {
          return true;
        }
      }
    }
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
    addFileToFolder,
    addFolderToFolder,
  };
};

export default useRoot;
