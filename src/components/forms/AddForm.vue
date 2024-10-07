<script setup lang="ts">
import useAddForm from "@/composables/useAddForm";
import useRef from "@/composables/useRef";
import { ref } from "vue";
const { folderId } = defineProps<{
  folderId?: number;
}>();

const { file_folder_name, handleSubmit, hideForm } = useAddForm(folderId);
const { myInput } = useRef();
const mountForm = ref(1);

const handleHideForm = () => {
  if (mountForm.value > 1) {
    if (file_folder_name.value !== "") {
      handleSubmit();
    }
    hideForm();
  }
  mountForm.value++;
};
</script>

<template>
  <form @submit.prevent="handleSubmit" v-click-outside="handleHideForm">
    <input type="text" ref="myInput" v-model="file_folder_name" class="px-1" />
  </form>
</template>
