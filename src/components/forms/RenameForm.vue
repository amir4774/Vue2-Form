<script setup lang="ts">
import useFileFolder from "@/composables/useFileFolder";

const { id } = defineProps<{
  id: number;
}>();

const model = defineModel();
const { hideForm } = useFileFolder({ id });
</script>

<template>
  <form @submit.prevent="hideForm">
    <input type="text" v-model="model" class="px-1" />
  </form>
</template>
