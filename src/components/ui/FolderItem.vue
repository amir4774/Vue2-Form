<script setup lang="ts">
import { inject, watch } from "vue";
import useShowItem from "@/composables/useShowItem";
import useFileFolder from "@/composables/useFileFolder";
import ContextMenuProvider from "../containers/ContextMenuProvider.vue";
import FileItem from "./FileItem.vue";
import RenameForm from "../forms/RenameForm.vue";
import ChevronIcon from "../icons/ChevronIcon.vue";
import AddForm from "../forms/AddForm.vue";
import type { contextMenuStatesType, FoldersType } from "@/Types";
import useClass from "@/composables/useClass";

const { folder } = defineProps<{
  folder: FoldersType;
}>();

const { isFileType } = useShowItem();
const { selectIcon } = useShowItem(folder);
const className = useClass("folder");
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
      :class="`${className} ${
        contextMenuStates.isRename && 'hover:bg-transparent'
      }`"
      @contextmenu.prevent="setCoordinate($event)"
      @click="hideMenu"
      v-click-outside="hideMenu"
    >
      <ChevronIcon :selectedIcon="selectIcon()" />
      <h3 v-if="!contextMenuStates.isRename">{{ renameValue }}</h3>
      <RenameForm v-else v-model="renameValue" :id="folder.id" />
    </div>

    <div class="ml-10" v-for="item in folder.children">
      <FileItem v-if="isFileType(item)" :file="item" />

      <FolderItem v-else :folder="(item as FoldersType)" />
    </div>

    <div class="ml-10">
      <AddForm
        :folderId="folder.id"
        v-if="contextMenuStates.isAddFileToFolder"
      />
    </div>
  </ContextMenuProvider>
</template>
