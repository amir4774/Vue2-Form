<script setup lang="ts">
import useAddForm from "@/composables/useAddForm";

const { file_folder_name, handleSubmit } = useAddForm();
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="file_folder_name" class="p-2" />
  </form>
</template>
