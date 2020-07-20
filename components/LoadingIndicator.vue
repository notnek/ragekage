<template>
  <div
    v-if="loading"
    class="rounded-full w-6 h-6 absolute top-6 right-6 border-solid border-gray-500 border-2 after:rounded-full after:w-6 after:h-6"
  />
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
div {
  border-left: 0.25rem solid transparent;
  transform: translateZ(0);
  animation: spinning 1s infinite linear;
}

@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
