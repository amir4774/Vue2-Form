import { inject, type Ref } from "vue";

const useAddForm = () => {
  const file_folder_name = inject("directoryName") as Ref;
  const isAddingFile = inject("isAddingFile") as Ref;
  const isAddingFolder = inject("isAddingFolder") as Ref;
  const addRootFolder = inject("addRootFolder") as (folderName: string) => void;
  const addRootFile = inject("addRootFile") as (fileName: string) => void;

  const handleSubmit = () => {
    if (isAddingFolder.value) {
      addRootFolder(file_folder_name.value);
    } else {
      addRootFile(file_folder_name.value);
    }

    file_folder_name.value = "";
    isAddingFile.value = false;
    isAddingFolder.value = false;
  };

  return { handleSubmit, file_folder_name};
};

export default useAddForm;
