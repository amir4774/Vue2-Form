<script lang="ts">
import Tree from "./components/Tree.vue";

export interface FileType {
  name: string;
  id: number;
}

export interface FoldersType {
  name: string;
  children: (FileType | FoldersType)[];
  isOpen: boolean;
  id: number;
}

export default {
  data() {
    return {
      folders: [
        { name: "src", children: [], isOpen: true, id: 1 },
      ] as FoldersType[],
    };
  },

  methods: {
    deleteFolder(deletedFolderId: number) {
      this.folders[0].children = this.folders[0].children.filter(
        (child) => child.id !== deletedFolderId
      );
    },
  },

  components: {
    Tree,
  },
};
</script>

<template>
  <main class="m-10">
    <Tree
      v-for="folder in folders"
      :key="folder.name"
      @delete-folder="deleteFolder"
      :folder="folder"
    />
  </main>
</template>
