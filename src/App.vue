<script setup lang="ts">
import ContextMenuProvider from "./components/ContextMenuProvider.vue";
import AppAside from "./components/AppAside.vue";
import { useContextMenuStore } from "./composables/useContextMenuStore";
import { provide } from "vue";

const { contextMenuStates } = useContextMenuStore();
provide("contextMenuStates", contextMenuStates);
</script>

<template>
  <ContextMenuProvider whichMenu="root" v-slot="{ setCoordinate, hideMenu }">
    <AppAside :setCoordinate="setCoordinate" :hideMenu="hideMenu" />
  </ContextMenuProvider>
</template>
