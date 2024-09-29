<script lang="ts">
import { defineComponent } from "vue";
import FileIcon from "./icons/FileIcon.vue";

export default defineComponent({
  data() {
    return {
      openMenu: false,
      isEditing: false,
      fileName: this.name,
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },

  emits: {
    "delete-file": (id: number) => id,
  },

  components: {
    FileIcon,
  },
});
</script>

<template>
  <div class="flex space-x-2">
    <FileIcon />

    <div
      class="flex space-x-2 cursor-pointer"
      @contextmenu.prevent="openMenu = !openMenu"
    >
      <h3 v-if="!isEditing">{{ fileName }}</h3>

      <form v-else @submit.prevent="isEditing = !isEditing">
        <input type="text" v-model="fileName" class="text-black" />
      </form>

      <div v-if="openMenu" class="p-5 bg-white text-black rounded-lg divide-y">
        <p @click="$emit('delete-file', id)">Delete File</p>
        <p @click="isEditing = !isEditing">Rename</p>
      </div>
    </div>
  </div>
</template>
