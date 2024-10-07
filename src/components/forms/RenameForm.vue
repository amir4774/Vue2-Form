<script setup lang="ts">
import useFileFolder from "@/composables/useFileFolder";
import { ref } from "vue";

const { id } = defineProps<{
  id: number;
}>();

const model = defineModel();
const { hideForm } = useFileFolder({ id });

const mountForm = ref(1);

const handleHideForm = () => {
  if (mountForm.value > 1) {
    hideForm();
  }
  mountForm.value++;
};
</script>

<template>
  <form @submit.prevent="hideForm" v-click-outside="handleHideForm">
    <input type="text" v-model="model" class="px-1" />
  </form>
</template>
