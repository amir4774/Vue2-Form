<script setup lang="ts">
defineProps<{
  isRename: boolean;
  hideMenu: () => void;
  setCoordinate: (event: MouseEvent) => void;
}>();
</script>

<template>
  <div
    @contextmenu.prevent="setCoordinate($event)"
    @click="hideMenu"
    v-click-outside="hideMenu"
    :class="`w-full cursor-pointer transition-all duration-300 rounded-lg hover:bg-pink-500 ${
      isRename && 'hover:bg-transparent'
    }`"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
