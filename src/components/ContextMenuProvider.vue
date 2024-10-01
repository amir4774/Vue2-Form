<script setup lang="ts">
import { provide, ref } from "vue";
import useContextMenu from "@/composables/useContextMenu";
import ContextMenu from "./ContextMenu.vue";

const { clientX, clientY, showMenu, hideMenu, setCoordinate } =
  useContextMenu();

const isAddingFolder = ref(false);
const isAddingFile = ref(false);
const file_folder_name = ref("");

provide("directoryName", file_folder_name);
provide("isAddingFolder", isAddingFolder);
provide("isAddingFile", isAddingFile);
</script>

<template>
  <ContextMenu
    v-if="showMenu"
    :clientX="clientX"
    :clientY="clientY"
    whichMenu="root"
    @click="hideMenu"
    @add-root-folder="isAddingFolder = true"
    @add-root-file="isAddingFile = true"
  />
  <slot :setCoordinate="setCoordinate" :hideMenu="hideMenu"></slot>
</template>
