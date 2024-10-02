<script setup lang="ts">
import { inject } from "vue";
import FileItem from "./ui/FileItem.vue";
import useShowItem from "@/composables/useShowItem";
import FolderItem from "./ui/FolderItem.vue";
import type { contextMenuStatesType, FileType, FoldersType } from "@/Types";

const { item } = defineProps<{
  item: FoldersType | FileType;
}>();

const { isFileType } = useShowItem(item);

const getContextMenuState = inject("getContextMenuState") as (
  id: number
) => contextMenuStatesType;
const contextMenuStates = getContextMenuState(item.id);
</script>

<template>
  <div
    :class="`cursor-pointer transition-all duration-300 rounded-lg hover:bg-pink-500 ${
      contextMenuStates.isRename && 'hover:bg-transparent'
    }`"
  >
    <FileItem v-if="isFileType()" :file="item" />

    <FolderItem v-else :folder="(item as FoldersType)" />
  </div>
</template>
