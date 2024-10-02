<script setup lang="ts">
import useFile from "@/composables/useFile";

const model = defineModel();
const { hideForm } = useFile();
</script>

<template>
  <form @submit.prevent="hideForm">
    <input type="text" v-model="model" class="px-1" />
  </form>
</template>
