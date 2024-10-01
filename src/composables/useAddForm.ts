import type { contextMenuStatesType } from "@/Types";
import { inject, ref } from "vue";

const useAddForm = () => {
  const contextMenuStates = inject(
    "contextMenuStates"
  ) as contextMenuStatesType;
  const addRootFolder = inject("addRootFolder") as (folderName: string) => void;
  const addRootFile = inject("addRootFile") as (fileName: string) => void;

  const file_folder_name = ref(contextMenuStates.file_folder_name);

  const handleSubmit = () => {
    if (contextMenuStates.isAddingFolder) {
      addRootFolder(file_folder_name.value);
    } else {
      addRootFile(file_folder_name.value);
    }

    contextMenuStates.file_folder_name = "";
    contextMenuStates.isAddingFile = false;
    contextMenuStates.isAddingFolder = false;
  };

  return { handleSubmit, file_folder_name };
};

export default useAddForm;
