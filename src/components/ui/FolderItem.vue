<script setup lang="ts">
import { inject, watch } from "vue";
import useShowItem from "@/composables/useShowItem";
import useFileFolder from "@/composables/useFileFolder";
import ContextMenuProvider from "../containers/ContextMenuProvider.vue";
import FileItem from "./FileItem.vue";
import RenameForm from "../forms/RenameForm.vue";
import ChevronIcon from "../icons/ChevronIcon.vue";
import type { contextMenuStatesType, FoldersType } from "@/Types";

const { folder } = defineProps<{
  folder: FoldersType;
}>();

const { isFileType } = useShowItem();
const { selectIcon } = useShowItem(folder);
const { renameValue, deleteItem } = useFileFolder({
  initialValue: folder.name,
  id: folder.id,
});

const getContextMenuState = inject("getContextMenuState") as (
  id: number
) => contextMenuStatesType;
const contextMenuStates = getContextMenuState(folder.id);

watch(
  () => contextMenuStates.isDeleting,
  (newVal) => {
    if (newVal) {
      deleteItem(folder.id);
      contextMenuStates.isDeleting = false;
    }
  }
);
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
      <h3 v-if="!contextMenuStates.isRename">{{ renameValue }}</h3>
      <RenameForm v-else v-model="renameValue" :id="folder.id" />

      <div class="ml-5" v-for="item in folder.children">
        <div
          :class="`ml-5 cursor-pointer transition-all duration-300 rounded-lg hover:bg-pink-500 ${
            contextMenuStates.isRename && 'hover:bg-transparent'
          }`"
        >
          <FileItem v-if="isFileType(item)" :file="item" />

          <FolderItem v-else :folder="(item as FoldersType)" />
        </div>
      </div>
    </div>
  </ContextMenuProvider>
</template>
