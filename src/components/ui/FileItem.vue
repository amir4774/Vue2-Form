<script setup lang="ts">
import { inject } from "vue";
import ContextMenuProvider from "../containers/ContextMenuProvider.vue";
import useRename from "@/composables/useRename";
import type { contextMenuStatesType } from "@/Types";
import RenameForm from "../forms/RenameForm.vue";

const { fileName } = defineProps<{
  fileName: string;
}>();

const { renameValue } = useRename(fileName);

const contextMenuStates = inject("contextMenuStates") as contextMenuStatesType;
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
