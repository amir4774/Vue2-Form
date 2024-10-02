import { inject, ref, type Ref } from "vue";
import type { contextMenuStatesType, FileType, FoldersType } from "@/Types";

interface useFolderProps {
  initialValue?: string;
  id: number;
}

const useFolder = ({ initialValue, id }: useFolderProps) => {
  const getContextMenuState = inject("getContextMenuState") as (
    id: number
  ) => contextMenuStatesType;
  const contextMenuStates = getContextMenuState(id);

  const deleteFileOrFolder = inject("deleteFileOrFolder") as (
    items: (FoldersType | FileType)[],
    id: number
  ) => boolean;

  const root = inject("root") as Ref<(FoldersType | FileType)[]>;

  const renameValue = ref(initialValue);

  const hideForm = () => {
    contextMenuStates.isRename = false;
  };

  const deleteFile = (id: number) => {
    deleteFileOrFolder(root.value, id);
    contextMenuStates.isDeleting = false;
  };

  return { renameValue, hideForm, deleteFile };
};

export default useFolder;
