<script setup lang="ts">
import { provide } from "vue";
import useRoot from "@/composables/useRoot";

const { root, addRootFolder, addRootFile } = useRoot();

provide("addRootFolder", addRootFolder);
provide("addRootFile", addRootFile);
</script>

<template>
  <slot :root="root"></slot>
</template>
