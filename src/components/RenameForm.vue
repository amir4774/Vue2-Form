<script setup lang="ts">
import useRename from "@/composables/useRename";

const model = defineModel();
const { hideForm } = useRename();
</script>

<template>
  <form @submit.prevent="hideForm">
    <input type="text" v-model="model" class="px-1" />
  </form>
</template>
