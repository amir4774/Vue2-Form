<script setup lang="ts">
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
  <div>
    <div v-if="isFileType(item)">{{ (item as FileType).name }}</div>
    <div v-else class="flex space-x-2 cursor-pointer">
      <ChevronIcon :selectedIcon="selectIcon()" />
      {{ (item as FoldersType).name }}
    </div>
  </div>
</template>
