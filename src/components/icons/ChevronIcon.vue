<script setup lang="ts">
defineProps<{
  selectedIcon: "down" | "up";
}>();

const icons = {
  down: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>`,
  up: `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="size-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m19.5 8.25-7.5 7.5-7.5-7.5"
  />
</svg>`,
} as const;
</script>

<template>
  <div v-html="icons[selectedIcon]"></div>
</template>
