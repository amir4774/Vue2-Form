<script setup lang="ts">
import { inject } from "vue";
import useContextMenu from "@/composables/useContextMenu";
import ContextMenu from "../ui/ContextMenu.vue";
import type { contextMenuStatesType } from "@/Types";

const { id } = defineProps<{
  whichMenu: "file" | "root" | "folder";
  id?: number;
}>();

const { clientX, clientY, showMenu, hideMenu, setCoordinate } =
  useContextMenu();

let contextMenuStates: contextMenuStatesType;

if (id) {
  const getContextMenuState = inject("getContextMenuState") as (
    id: number
  ) => contextMenuStatesType;
  contextMenuStates = getContextMenuState(id);
} else {
  contextMenuStates = inject("contextMenuStates") as contextMenuStatesType;
}
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
    @rename="contextMenuStates.isRename = true"
    @delete="contextMenuStates.isDeleting = true"
    @add-file="contextMenuStates.isAddFileToFolder = true"
    @add-folder="contextMenuStates.isAddFolderToFolder = true"
  />
  <slot :setCoordinate="setCoordinate" :hideMenu="hideMenu"></slot>
</template>
