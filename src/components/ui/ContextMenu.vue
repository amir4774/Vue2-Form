<script setup lang="ts">
const { whichMenu } = defineProps<{
  clientX: number;
  clientY: number;
  whichMenu: "root" | "folder" | "file";
}>();

const emit = defineEmits<{
  "add-root-folder": [];
  "add-root-file": [];
  "add-folder": [];
  "add-file": [];
  rename: [];
  delete: [];
}>();

const emitAction = (action: any) => {
  emit(action);
};

const menus = {
  root: {
    values: ["Add Folder", "Add File"],
    emit: ["add-root-folder", "add-root-file"],
  },
  folder: {
    values: ["Add Folder", "Add File", "Rename", "Delete Folder"],
    emit: ["add-folder", "add-file", "rename", "delete"],
  },
  file: {
    values: ["Rename", "Delete File"],
    emit: ["rename", "delete"],
  },
} as const;
</script>

<template>
  <div
    class="absolute p-5 bg-white text-black z-50 rounded-lg"
    :style="{ left: `${clientX}px`, top: `${clientY}px` }"
  >
    <div class="w-full divide-y flex flex-col">
      <button
        class="p-2 rounded-lg hover:bg-gray-300"
        v-for="(value, index) in menus[whichMenu].values"
        :key="index"
        @click="emitAction(menus[whichMenu].emit[index])"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>
