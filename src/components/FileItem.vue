<script setup lang="ts">
import ContextMenuProvider from "./ContextMenuProvider.vue";

defineProps<{
  fileName: string;
}>();
</script>

<template>
  <ContextMenuProvider whichMenu="file" v-slot="{ setCoordinate, hideMenu }">
    <div @contextmenu.prevent="setCoordinate($event)" @click="hideMenu">
      <h3>{{ fileName }}</h3>
    </div>
  </ContextMenuProvider>
</template>
