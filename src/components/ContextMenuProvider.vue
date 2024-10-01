<script setup lang="ts">
import { inject, provide, reactive, type Reactive } from "vue";
import useContextMenu from "@/composables/useContextMenu";
import ContextMenu from "./ContextMenu.vue";
import type { ShowContextMenuType } from "@/Types";

defineProps<{
  whichMenu: "file" | "root" | "folder";
}>();

const { clientX, clientY, setCoordinate } = useContextMenu();

const hideMenu = () => {
  showContextMenu.app = false;
  showContextMenu.file = false;
}

const contextMenuStates = reactive({
  isAddingFolder: false,
  isAddingFile: false,
  file_folder_name: "",
});

provide("contextMenuStates", contextMenuStates);

const showContextMenu = inject("showContextMenu") as Reactive<ShowContextMenuType>;
</script>

<template>
  <ContextMenu
    v-if="showContextMenu.app || showContextMenu.file"
    :clientX="clientX"
    :clientY="clientY"
    :whichMenu="whichMenu"
    @click="hideMenu"
    @add-root-folder="contextMenuStates.isAddingFolder = true"
    @add-root-file="contextMenuStates.isAddingFile = true"
  />
  <slot :setCoordinate="setCoordinate"></slot>
</template>
