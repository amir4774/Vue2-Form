<script lang="ts">
import { defineComponent, type PropType } from "vue";
import File from "./File.vue";
import type { FileType, FoldersType } from "@/App.vue";
import ChevronIcon from "./icons/ChevronIcon.vue";
import FolderIcon from "./icons/FolderIcon.vue";

export default defineComponent({
  data() {
    return {
      openMenu: false,
      isEditing: false,
      isAddingFile: false,
      isAddingFolder: false,
      name: this.folder.name,
      folder_file_name: "",
    };
  },

  props: {
    folder: {
      type: Object as PropType<FoldersType>,
      required: true,
    },
  },

  emits: {
    "delete-folder": (id: number) => id,
  },

  components: {
    File,
    ChevronIcon,
    FolderIcon,
  },

  methods: {
    createRandomId() {
      return Math.trunc(Math.random() * 10000);
    },

    addContent() {
      const id = this.createRandomId();

      if (this.isAddingFile) {
        this.folder.children.push({
          name: this.folder_file_name,
          id,
        } as FileType);
      } else {
        this.folder.children.push({
          name: this.folder_file_name,
          children: [],
          isOpen: false,
          id,
        });
      }

      this.isAddingFile = false;
      this.isAddingFolder = false;
      this.folder_file_name = "";
    },

    deleteFolder() {
      console.log("Emitting delete-folder for folder ID: ", this.folder.id);
      this.$emit("delete-folder", this.folder.id); // Emit the event
    },

    deleteChildFolder(id: number) {
      console.log("Bubbling delete-folder event from child ID: ", id);
      this.$emit("delete-folder", id); // Bubble the event up to the parent component
    },

    deleteFile(id: number) {
      this.folder.children = this.folder.children.filter(
        (child) => child.id !== id
      );
    },

    closeFolder(child: FoldersType) {
      child.isOpen = !child.isOpen;
    },

    isFileType(item: FileType | FoldersType): item is FileType {
      return (
        (item as FileType).name !== undefined &&
        (item as FoldersType).children === undefined
      );
    },
  },
});
</script>

<template>
  <div
    class="flex space-x-2 cursor-pointer"
    @contextmenu.prevent="openMenu = !openMenu"
  >
    <div class="flex space-x-2" @click="closeFolder(folder)">
      <ChevronIcon :isOpen="folder.isOpen" />
      <FolderIcon :isOpen="folder.isOpen" />

      <h3 v-if="!isEditing">{{ name }}</h3>

      <form v-else @submit.prevent="isEditing = !isEditing">
        <input type="text" v-model="name" class="text-black" />
      </form>
    </div>

    <div v-if="openMenu" class="p-5 bg-white text-black rounded-lg divide-y">
      <p @click="isAddingFile = !isAddingFile">Add File</p>
      <p @click="isAddingFolder = !isAddingFolder">Add Folder</p>
      <p @click="deleteFolder">Delete Folder</p>
      <p @click="isEditing = !isEditing">Rename</p>
    </div>

    <form v-if="isAddingFile || isAddingFolder" @submit.prevent="addContent">
      <input type="text" v-model="folder_file_name" class="text-black" />
    </form>
  </div>

  <div v-if="folder.isOpen">
    <div class="ml-10 mt-5" v-for="child in folder.children" :key="child.id">
      <File
        v-if="isFileType(child)"
        :name="child.name"
        :id="child.id"
        @delete-file="deleteFile"
      />

      <Tree v-else :folder="child" @delete-folder="deleteChildFolder" />
    </div>
  </div>
</template>
