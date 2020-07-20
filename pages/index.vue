<template>
  <main>
    <search-form @search="handleSearch" />
    <image-list :images="filteredImages" />

    <footer class="text-gray-600 mt-12 text-sm text-right">
      Curated by
      <a href="https://kenton.glass" target="_blank" rel="noopener">
        Kenton Glass
      </a>.
    </footer>
  </main>
</template>

<script>
import fuzzy from 'fuzzy';

export default {
  async asyncData({ $content }) {
    const { images } = await $content('images').fetch();

    return {
      images,
    };
  },
  data() {
    return {
      query: '',
    };
  },
  computed: {
    filteredImages() {
      if (this.hasQuery) {
        return fuzzy
          .filter(this.query, this.images)
          .map((result) => result.string);
      }

      return this.images;
    },
    hasQuery() {
      return this.query.length > 0;
    },
  },
  methods: {
    handleSearch(query) {
      this.query = query;
    },
  },
  head: {
    title: 'Rage Kage, a collection of animated gifs',
  },
};
</script>
