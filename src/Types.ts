export interface FileType {
  name: string;
  id: number;
}

export interface FoldersType extends FileType {
  children: (FileType | FoldersType)[];
  isOpen: boolean;
}

export interface contextMenuStatesType {
  isAddingFolder: boolean;
  isAddingFile: boolean;
  file_folder_name: string;
}

export interface ShowContextMenuType {
  app: boolean;
  file: boolean;
}
