import { ref } from "vue";
import useId from "./useId";
import type { FileType, FoldersType } from "@/Types";

const useRoot = () => {
  const root = ref<(FoldersType | FileType)[]>([]);
  const id = useId();

  const addRootFolder = (folderName: string) => {
    if (!folderName) return;

    root.value.push({
      id,
      children: [],
      isOpen: false,
      name: folderName,
    });
  };

  const addRootFile = (fileName: string) => {
    if (!fileName) return;

    root.value.push({
      id,
      name: fileName,
    });
  };

  return {
    root,
    addRootFolder,
    addRootFile,
  };
};

export default useRoot;
