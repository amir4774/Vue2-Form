<script lang="ts">
import FormButton from "./FormButton.vue";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";

export default {
  data() {
    return {
      firstName: "" as string,
      lastName: "" as string,
      textareaValue: "" as string,

      inputs: [
        { id: "first-name", label: "First Name", model: "firstName" },
        { id: "last-name", label: "Last Name", model: "lastName" },
      ] as { id: string; label: string; model: string }[],
    };
  },

  methods: {
    isFieldsEmpty() {
      return (
        this.textareaValue === "" ||
        this.firstName === "" ||
        this.lastName === ""
      );
    },

    handleSubmit() {
      if (this.isFieldsEmpty()) {
        alert("Please fill in all fields");
        return;
      }

      console.log(this.firstName, this.lastName, this.textareaValue);
    },
  },

  components: {
    FormInput,
    FormTextarea,
    FormButton,
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <FormInput
      v-for="item in inputs"
      :key="item.id"
      :id="item.id"
      :inputLabel="item.label"
      v-model="this[item.model]"
    />

    <FormTextarea v-model="textareaValue" />

    <FormButton :isDisabled="isFieldsEmpty()">Submit</FormButton>
  </form>
</template>

<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
