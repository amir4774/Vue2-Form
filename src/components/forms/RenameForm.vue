<script setup lang="ts">
import useFile from "@/composables/useFile";

const { id } = defineProps<{
  id: number;
}>();

const model = defineModel();
const { hideForm } = useFile({ id });
</script>

<template>
  <form @submit.prevent="hideForm">
    <input type="text" v-model="model" class="px-1" />
  </form>
</template>
