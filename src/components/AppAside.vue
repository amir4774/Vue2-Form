<script setup lang="ts">
import ShowItems from "./ShowItems.vue";
import AppAsideContainer from "./AppAsideContainer.vue";
import { inject, type Reactive } from "vue";
import type { ShowContextMenuType } from "@/Types";

const { setCoordinate } = defineProps<{
  setCoordinate: (event: MouseEvent) => void;
}>();

const showContextMenu = inject(
  "showContextMenu"
) as Reactive<ShowContextMenuType>;

const handleShowContextMenu = (event: MouseEvent) => {
  setCoordinate(event);
  showContextMenu.app = true;
};

const hideMenu = () => {
  showContextMenu.app = false;
  showContextMenu.file = false;
};
</script>

<template>
  <AppAsideContainer v-slot="{ root }">
    <aside
      class="relative min-h-screen w-[400px] bg-red-300 text-black p-12"
      @contextmenu.prevent="handleShowContextMenu"
      @click="hideMenu"
    >
      <div class="flex flex-col space-y-3">
        <ShowItems :root="root" />
      </div>
    </aside>
  </AppAsideContainer>
</template>
