<script setup lang="ts">
import { inject, watch } from "vue";
import ContextMenuProvider from "../containers/ContextMenuProvider.vue";
import useFile from "@/composables/useFile";
import type { contextMenuStatesType, FileType } from "@/Types";
import RenameForm from "../forms/RenameForm.vue";

const { file } = defineProps<{
  file: FileType;
}>();

const { renameValue, deleteFile } = useFile(file.name);

const contextMenuStates = inject("contextMenuStates") as contextMenuStatesType;

watch(
  () => contextMenuStates.isDeleting,
  (newVal) => {
    if (newVal) {
      deleteFile(file.id);
    }
  }
);
</script>

<template>
  <ContextMenuProvider whichMenu="file" v-slot="{ setCoordinate, hideMenu }">
    <div
      @contextmenu.prevent="setCoordinate($event)"
      @click="hideMenu"
      v-click-outside="hideMenu"
    >
      <h3 v-if="!contextMenuStates.isRename">{{ renameValue }}</h3>
      <RenameForm v-else v-model="renameValue" />
    </div>
  </ContextMenuProvider>
</template>
