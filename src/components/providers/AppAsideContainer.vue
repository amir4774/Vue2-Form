<script setup lang="ts">
import { provide } from "vue";
import useRoot from "@/composables/useRoot";

const {
  root,
  addRootFolder,
  addRootFile,
  addFileToFolder,
  addFolderToFolder,
  deleteFileOrFolder,
} = useRoot();

provide("root", root);
provide("addRootFolder", addRootFolder);
provide("addRootFile", addRootFile);
provide("addFileToFolder", addFileToFolder);
provide("addFolderToFolder", addFolderToFolder);
provide("deleteFileOrFolder", deleteFileOrFolder);
</script>

<template>
  <slot :root="root"></slot>
</template>
