<script setup lang="ts">
import { inject, watch } from "vue";
import ContextMenuProvider from "../containers/ContextMenuProvider.vue";
import useFileFolder from "@/composables/useFileFolder";
import type { contextMenuStatesType, FileType } from "@/Types";
import RenameForm from "../forms/RenameForm.vue";

const { file } = defineProps<{
  file: FileType;
}>();

const { renameValue, deleteItem } = useFileFolder({
  initialValue: file.name,
  id: file.id,
});

const getContextMenuState = inject("getContextMenuState") as (
  id: number
) => contextMenuStatesType;
const contextMenuStates = getContextMenuState(file.id);

watch(
  () => contextMenuStates.isDeleting,
  (newVal) => {
    if (newVal) {
      deleteItem(file.id);
      contextMenuStates.isDeleting = false;
    }
  }
);
</script>

<template>
  <ContextMenuProvider
    :id="file.id"
    whichMenu="file"
    v-slot="{ setCoordinate, hideMenu }"
  >
    <div
      @contextmenu.prevent="setCoordinate($event)"
      @click="hideMenu"
      v-click-outside="hideMenu"
    >
      <h3 v-if="!contextMenuStates.isRename">{{ renameValue }}</h3>
      <RenameForm v-else v-model="renameValue" :id="file.id" />
    </div>
  </ContextMenuProvider>
</template>
