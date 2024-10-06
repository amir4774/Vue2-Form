<script setup lang="ts">
import ContextMenuProvider from "./components/providers/ContextMenuProvider.vue";
import AppAside from "./components/ui/AppAside.vue";
import { useContextMenuStore } from "./composables/useContextMenuStore";
import { provide } from "vue";

const { contextMenuStates, getContextMenuState } = useContextMenuStore();
provide("getContextMenuState", getContextMenuState);
provide("contextMenuStates", contextMenuStates);
</script>

<template>
  <ContextMenuProvider whichMenu="root" v-slot="{ setCoordinate, hideMenu }">
    <AppAside :setCoordinate="setCoordinate" :hideMenu="hideMenu" />
  </ContextMenuProvider>
</template>
