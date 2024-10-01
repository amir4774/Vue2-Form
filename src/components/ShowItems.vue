<script setup lang="ts">
import { inject, type Reactive } from "vue";
import AddForm from "./AddForm.vue";
import ShowItem from "./ShowItem.vue";

defineProps<{
  root: any;
}>();

const isAddingFolder = inject("isAddingFolder");
const isAddingFile = inject("isAddingFile");
</script>

<template>
  <ShowItem v-for="item in root" :key="item.id" :item="item" />

  <AddForm v-if="isAddingFolder || isAddingFile" />
</template>
