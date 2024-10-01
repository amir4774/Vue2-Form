<script setup lang="ts">
import ShowItems from "./ShowItems.vue";
import AppAsideContainer from "./AppAsideContainer.vue";

defineProps<{
  hideMenu: () => void;
  setCoordinate: (event: MouseEvent) => void;
}>();
</script>

<template>
  <AppAsideContainer v-slot="{ root }">
    <aside
      class="relative min-h-screen w-[400px] bg-red-300 text-black p-12"
      @contextmenu.prevent="setCoordinate($event)"
      @click="hideMenu"
    >
      <div class="flex flex-col space-y-3">
        <ShowItems :root="root" />
      </div>
    </aside>
  </AppAsideContainer>
</template>
