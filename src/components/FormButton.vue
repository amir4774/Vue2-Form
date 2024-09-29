<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isDisabled: { type: Boolean, required: true },
  },
});
</script>

<template>
  <button :disabled="isDisabled" class="btn" type="submit">
    <slot></slot>
  </button>
</template>
