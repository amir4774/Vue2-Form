import { inject, ref } from "vue";
import type { contextMenuStatesType, FileType, FoldersType } from "@/Types";

const useAddForm = (folderId?: number) => {
  let contextMenuStates: contextMenuStatesType;

  if (folderId) {
    const getContextMenuState = inject("getContextMenuState") as (
      folderId: number
    ) => contextMenuStatesType;
    contextMenuStates = getContextMenuState(folderId);
  } else {
    contextMenuStates = inject("contextMenuStates") as contextMenuStatesType;
  }

  const addRootFolder = inject("addRootFolder") as (folderName: string) => void;
  const addRootFile = inject("addRootFile") as (fileName: string) => void;
  const addFileToFolder = inject("addFileToFolder") as (
    folderId: number,
    fileName: string
  ) => void;
  const addFolderToFolder = inject("addFolderToFolder") as (
    folderId: number,
    folderName: string,
    items?: (FoldersType | FileType)[]
  ) => void;

  const file_folder_name = ref(contextMenuStates.file_folder_name);

  const handleSubmit = () => {
    if (contextMenuStates.isAddingFolder) {
      addRootFolder(file_folder_name.value);
    } else if (contextMenuStates.isAddingFile) {
      addRootFile(file_folder_name.value);
    } else if (contextMenuStates.isAddFileToFolder) {
      addFileToFolder(folderId ?? 0, file_folder_name.value);
    } else if (contextMenuStates.isAddFolderToFolder) {
      addFolderToFolder(folderId ?? 0, file_folder_name.value);
    }

    hideForm();
  };

  const hideForm = () => {
    contextMenuStates.file_folder_name = "";
    contextMenuStates.isAddingFile = false;
    contextMenuStates.isAddingFolder = false;
    contextMenuStates.isAddFileToFolder = false;
    contextMenuStates.isAddFolderToFolder = false;
  };

  return { handleSubmit, hideForm, file_folder_name };
};

export default useAddForm;
