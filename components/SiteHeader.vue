<template>
  <header class="mb-16">
    <component :is="component" :class="nameClasses">
      <nuxt-link
        class="text-gray-900 dark-mode:text-gray-100 hover:no-underline"
        to="/"
      >
        Rage Kage<!-- prettier-ignore --><span class="font-normal">, a collection of animated gifs</span>
      </nuxt-link>
    </component>
  </header>
</template>

<script>
export default {
  computed: {
    component() {
      return this.useH1 ? 'h1' : 'div';
    },
    nameClasses() {
      if (this.useH1) {
        return null;
      }

      return 'text-lg leading-tight mb-2 md:text-xl font-bold';
    },
    useH1() {
      return this.$route.path === '/';
    },
  },
};
</script>
