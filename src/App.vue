<script setup lang="ts">
import ContextMenuProvider from "./components/ContextMenuProvider.vue";
import AppAside from "./components/AppAside.vue";
</script>

<template>
  <ContextMenuProvider v-slot="{ setCoordinate, hideMenu }">
    <AppAside :setCoordinate="setCoordinate" :hideMenu="hideMenu" />
  </ContextMenuProvider>
</template>
