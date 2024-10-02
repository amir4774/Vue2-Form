<script setup lang="ts">
import { inject, watch } from "vue";
import useShowItem from "@/composables/useShowItem";
import ChevronIcon from "../icons/ChevronIcon.vue";
import ContextMenuProvider from "../containers/ContextMenuProvider.vue";
import type { contextMenuStatesType, FoldersType } from "@/Types";
import useFolder from "@/composables/useFolder";

const { folder } = defineProps<{
  folder: FoldersType;
}>();

const { selectIcon } = useShowItem(folder);

const getContextMenuState = inject("getContextMenuState") as (
  id: number
) => contextMenuStatesType;
const contextMenuStates = getContextMenuState(folder.id);

</script>

<template>
  <ContextMenuProvider
    whichMenu="folder"
    :id="folder.id"
    v-slot="{ setCoordinate, hideMenu }"
  >
    <div
      class="flex space-x-2"
      @contextmenu.prevent="setCoordinate($event)"
      @click="hideMenu"
      v-click-outside="hideMenu"
    >
      <ChevronIcon :selectedIcon="selectIcon()" />
      <h3>{{ folder.name }}</h3>
    </div>
  </ContextMenuProvider>
</template>
