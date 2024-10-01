<script setup lang="ts">
import ContextMenuProvider from "./components/ContextMenuProvider.vue";
import AppAside from "./components/AppAside.vue";
import { provide, reactive } from "vue";

const showContextMenu = reactive({
  app: false,
  file: false,
});

provide("showContextMenu", showContextMenu);
</script>

<template>
  <ContextMenuProvider whichMenu="root" v-slot="{ setCoordinate }">
    <AppAside :setCoordinate="setCoordinate" />
  </ContextMenuProvider>
</template>
