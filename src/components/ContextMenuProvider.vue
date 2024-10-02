<script setup lang="ts">
import { inject, provide, reactive } from "vue";
import useContextMenu from "@/composables/useContextMenu";
import ContextMenu from "./ContextMenu.vue";
import type { contextMenuStatesType } from "@/Types";

defineProps<{
  whichMenu: "file" | "root" | "folder";
}>();

const { clientX, clientY, showMenu, hideMenu, setCoordinate } =
  useContextMenu();

const contextMenuStates = inject("contextMenuStates") as contextMenuStatesType;
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
  />
  <slot :setCoordinate="setCoordinate" :hideMenu="hideMenu"></slot>
</template>
