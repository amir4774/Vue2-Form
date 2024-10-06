<script setup lang="ts">
import useAddForm from "@/composables/useAddForm";

const { folderId } = defineProps<{
  folderId?: number;
}>();

const { file_folder_name, handleSubmit } = useAddForm(folderId);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="file_folder_name" class="px-1" />
  </form>
</template>
