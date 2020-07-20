<template>
  <ul v-if="hasAnyImages" class="">
    <single-image v-for="image in images" :key="image" :image="image" />
  </ul>
  <p v-else class="italic">No images match your search. Try something else!</p>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    hasAnyImages() {
      return this.images.length > 0;
    },
  },
};
</script>
