<script setup lang="ts">
import { ref } from "vue";
import useFileFolder from "@/composables/useFileFolder";
import useRef from "@/composables/useRef";

const { id } = defineProps<{
  id: number;
}>();

const model = defineModel();
const { hideForm } = useFileFolder({ id });
const { myInput } = useRef();

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
    <input type="text" ref="myInput" v-model="model" class="px-1" />
  </form>
</template>
