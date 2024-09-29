<script lang="ts">
export default {
  emits: { "update:modelValue": (value: string) => true },

  methods: {
    handleChange(event: Event) {
      const target = event.target as HTMLInputElement | null;
      if (target) {
        this.$emit("update:modelValue", target.value);
      }
    },
  },
};
</script>

<template>
  <div class="textarea-wrapper">
    <label for="form-textarea">Text</label>
    <textarea
      id="form-textarea"
      placeholder="Enter Some Text..."
      @input="handleChange"
    ></textarea>
  </div>
</template>

<style scoped>
.textarea-wrapper {
  display: flex;
  flex-direction: column;
  grid-column: span 2 / span 2;
}

textarea {
  resize: vertical;
  margin-top: 5px;
}
</style>
