<script lang="ts">
import VueForm from "./components/VueForm.vue";

export default {
  components: {
    VueForm,
  },
};
</script>

<template>
  <main class="form-wrapper">
    <VueForm />
  </main>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 90%;
  margin: 30px auto;
}
</style>
