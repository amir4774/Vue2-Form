<script setup lang="ts">
import ShowItems from "./ShowItems.vue";
import AppAsideContainer from "../providers/AppAsideContainer.vue";

defineProps<{
  hideMenu: () => void;
  setCoordinate: (event: MouseEvent) => void;
}>();
</script>

<template>
  <AppAsideContainer v-slot="{ root }">
    <aside
      class="relative min-h-screen w-[500px] bg-red-300 text-black p-3"
      @contextmenu.prevent="setCoordinate($event)"
      @click="hideMenu"
      v-click-outside="hideMenu"
    >
      <div class="flex flex-col space-y-3">
        <ShowItems :root="root" />
      </div>
    </aside>
  </AppAsideContainer>
</template>
