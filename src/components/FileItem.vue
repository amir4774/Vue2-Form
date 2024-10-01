<script setup lang="ts">
import { inject, type Reactive } from "vue";
import ContextMenuProvider from "./ContextMenuProvider.vue";
import type { ShowContextMenuType } from "@/Types";

defineProps<{
  fileName: string;
}>();

const showContextMenu = inject(
  "showContextMenu"
) as Reactive<ShowContextMenuType>;
</script>

<template>
  <ContextMenuProvider whichMenu="file" v-slot="{ setCoordinate }">
    <div
      @contextmenu.prevent="
        ($event) => {
          setCoordinate($event);
          showContextMenu.file = true;
        }
      "
      @click="showContextMenu.file = false"
    >
      <h3>{{ fileName }}</h3>
    </div>
  </ContextMenuProvider>
</template>
