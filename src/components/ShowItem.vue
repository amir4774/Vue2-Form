<script setup lang="ts">
import FileItem from "./ui/FileItem.vue";
import useShowItem from "@/composables/useShowItem";
import FolderItem from "./ui/FolderItem.vue";
import type { FileType, FoldersType } from "@/Types";

const { item } = defineProps<{
  item: FoldersType | FileType;
}>();

const { isFileType } = useShowItem(item);
</script>

<template>
  <div>
    <FileItem v-if="isFileType()" :file="item" />

    <FolderItem v-else :folder="(item as FoldersType)" />
  </div>
</template>
