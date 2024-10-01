export interface FileType {
  name: string;
  id: number;
}

export interface FoldersType extends FileType {
  children: (FileType | FoldersType)[];
  isOpen: boolean;
}
