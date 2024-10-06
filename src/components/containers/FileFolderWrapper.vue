<script setup lang="ts">
import useClass from "@/composables/useClass";

defineProps<{
  isRename: boolean;
}>();

const className = useClass();
</script>

<template>
  <div
    :class="`w-full cursor-pointer transition-all duration-300 rounded-lg hover:bg-pink-500 ${
      isRename && 'hover:bg-transparent'
    }`"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
