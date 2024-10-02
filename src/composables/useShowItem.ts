import type { FileType, FoldersType } from "@/Types";

const useShowItem = (item: FileType | FoldersType) => {
  const selectIcon = (): "down" | "up" =>
    (item as FoldersType).isOpen ? "down" : "up";

  const isFileType = () => {
    return (
      (item as FileType).name !== undefined &&
      (item as FoldersType).children === undefined
    );
  };

  return { selectIcon, isFileType };
};

export default useShowItem;
