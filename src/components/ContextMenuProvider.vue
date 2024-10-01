<script setup lang="ts">
import { provide, reactive } from "vue";
import useContextMenu from "@/composables/useContextMenu";
import ContextMenu from "./ContextMenu.vue";

defineProps<{
  whichMenu: "file" | "root" | "folder";
}>();

const { clientX, clientY, showMenu, hideMenu, setCoordinate } =
  useContextMenu();

const contextMenuStates = reactive({
  isAddingFolder: false,
  isAddingFile: false,
  file_folder_name: "",
});

provide("contextMenuStates", contextMenuStates);
</script>

<template>
  <ContextMenu
    v-if="showMenu"
    :clientX="clientX"
    :clientY="clientY"
    :whichMenu="whichMenu"
    @click="hideMenu"
    @add-root-folder="contextMenuStates.isAddingFolder = true"
    @add-root-file="contextMenuStates.isAddingFile = true"
  />
  <slot
    :setCoordinate="setCoordinate"
    :hideMenu="hideMenu"
  ></slot>
</template>
