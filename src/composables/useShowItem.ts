import type { FileType, FoldersType } from "@/Types";

const useShowItem = (item?: FileType | FoldersType) => {
  const selectIcon = (): "down" | "up" =>
    (item as FoldersType).isOpen ? "down" : "up";

  const isFileType = (child?: FileType | FoldersType) => {
    const checkedItem = child ?? item;

    return (
      (checkedItem as FileType).name !== undefined &&
      (checkedItem as FoldersType).children === undefined
    );
  };

  return { selectIcon, isFileType };
};

export default useShowItem;
