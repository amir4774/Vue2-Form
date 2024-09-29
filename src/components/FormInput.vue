<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    inputLabel: { type: String, required: true },
    modelValue: { type: String, required: true },
  },

  emits: {
    "update:modelValue": (value: string) => true,
  },

  mounted() {
    this.id, this.inputLabel;
  },

  methods: {
    handelChange(event: Event) {
      const target = event.target as HTMLInputElement | null;
      if (target) {
        this.$emit("update:modelValue", target.value);
      }
    },
  },
});
</script>

<template>
  <div class="form-input">
    <label :for="id">{{ inputLabel }}</label>
    <input
      :id="id"
      type="text"
      :placeholder="`Enter your ${inputLabel}`"
      :value="modelValue"
      @input="handelChange"
    />
  </div>
</template>

<style scoped>
.form-input {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}
</style>
