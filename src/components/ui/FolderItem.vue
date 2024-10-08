<script setup lang="ts">
import { inject } from "vue";
import useShowItem from "@/composables/useShowItem";
import useFileFolder from "@/composables/useFileFolder";
import useContextMenuFolder from "@/composables/useContextMenuFolder";
import ContextMenuProvider from "../providers/ContextMenuProvider.vue";
import FileItem from "./FileItem.vue";
import AddForm from "../forms/AddForm.vue";
import FileFolderWrapper from "../providers/FileFolderWrapper.vue";
import ChevronIcon from "../icons/ChevronIcon.vue";
import RenameForm from "../forms/RenameForm.vue";
import type { contextMenuStatesType, FoldersType } from "@/Types";

const { folder } = defineProps<{
  folder: FoldersType;
}>();

const { isFileType, selectIcon } = useShowItem(folder);
const { renameValue, deleteItem } = useFileFolder({
  initialValue: folder.name,
  id: folder.id,
});

const getContextMenuState = inject("getContextMenuState") as (
  id: number
) => contextMenuStatesType;
const contextMenuStates = getContextMenuState(folder.id);

useContextMenuFolder(folder, deleteItem);
</script>

<template>
  <ContextMenuProvider
    whichMenu="folder"
    :id="folder.id"
    v-slot="{ setCoordinate, hideMenu }"
  >
    <FileFolderWrapper
      :hideMenu="hideMenu"
      :setCoordinate="setCoordinate"
      :isRename="contextMenuStates.isRename"
    >
      <div
        @click="folder.isOpen = !folder.isOpen"
        class="flex space-x-2 w-full"
      >
        <ChevronIcon :selectedIcon="selectIcon()" />
        <h3 v-if="!contextMenuStates.isRename">{{ renameValue }}</h3>
        <RenameForm v-else v-model="renameValue" :id="folder.id" /></div
    ></FileFolderWrapper>

    <div class="ml-7">
      <AddForm
        :folderId="folder.id"
        v-if="
          contextMenuStates.isAddFileToFolder ||
          contextMenuStates.isAddFolderToFolder
        "
      />
    </div>

    <div
      :class="`${
        folder.isOpen && folder.children && 'border-l-2'
      } ml-7 pl-2 border-indigo-500`"
      v-if="folder.isOpen"
      v-for="item in folder.children"
    >
      <FileItem v-if="isFileType(item)" :file="item" />

      <FolderItem v-else :folder="(item as FoldersType)" />
    </div>
  </ContextMenuProvider>
</template>
