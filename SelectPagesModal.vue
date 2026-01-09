<template>
  <div class="modal">
    <div class="list">
      <label class="row">
        <span>All pages</span>
        <input type="checkbox" :checked="allSelected" @change="toggleAll" />
      </label>

      <hr />

      <label v-for="page in pages" :key="page" class="row">
        <span>{{ page }}</span>
        <input
          type="checkbox"
          :checked="selected.includes(page)"
          @change="togglePage(page)"
        />
      </label>
    </div>

    <button class="done-btn" @click="handleDone">Done</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
const selected = ref([]);

const allSelected = computed(() => selected.value.length === pages.length);

const toggleAll = () => {
  selected.value = allSelected.value ? [] : [...pages];
};

const togglePage = (page) => {
  selected.value = selected.value.includes(page)
    ? selected.value.filter(p => p !== page)
    : [...selected.value, page];
};

const handleDone = () => {
  alert(
    selected.value.length
      ? `Selected: ${selected.value.join(", ")}`
      : "No pages selected"
  );
};
</script>
