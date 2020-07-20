<template>
  <form class="mb-6" @submit.prevent>
    <input
      v-model="query"
      class="focus:outline-none px-4 py-3 placeholder-gray-700 text-gray-900 w-full dark-mode:bg-gray-800 dark-mode:placeholder-gray-500 dark-mode:text-gray-300 border border-solid border-transparent focus:border-white dark-mode:focus:border-gray-500"
      placeholder="Type to find a gif..."
      type="search"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  watch: {
    query(value) {
      this.$emit('search', value);
    },
  },
};
</script>
