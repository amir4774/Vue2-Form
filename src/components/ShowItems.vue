<script setup lang="ts">
import { inject, type Reactive, type Ref } from "vue";
import AddForm from "./AddForm.vue";
import ShowItem from "./ShowItem.vue";
import type { contextMenuStatesType, FileType, FoldersType } from "@/Types";

defineProps<{
  root: (FoldersType | FileType)[];
}>();

const contextMenuStates = inject("contextMenuStates") as contextMenuStatesType;
</script>

<template>
  <ShowItem v-for="item in root" :key="item.id" :item="item" />

  <AddForm
    v-if="contextMenuStates.isAddingFolder || contextMenuStates.isAddingFile"
  />
</template>
