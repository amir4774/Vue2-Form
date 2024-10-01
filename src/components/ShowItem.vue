<script setup lang="ts">
import FileItem from "./FileItem.vue";
import ChevronIcon from "./icons/ChevronIcon.vue";
import type { FileType, FoldersType } from "@/Types";

const { item } = defineProps<{
  item: FoldersType | FileType;
}>();

const selectIcon = (): "down" | "up" =>
  (item as FoldersType).isOpen ? "down" : "up";

const isFileType = (child: FileType | FoldersType): child is FileType => {
  return (
    (child as FileType).name !== undefined &&
    (child as FoldersType).children === undefined
  );
};
</script>

<template>
  <div
    class="cursor-pointer transition-all duration-300 rounded-lg p-2 hover:bg-pink-500"
  >
    <FileItem v-if="isFileType(item)" :fileName="item.name" />

    <div v-else class="flex space-x-2">
      <ChevronIcon :selectedIcon="selectIcon()" />
      {{ (item as FoldersType).name }}
    </div>
  </div>
</template>
