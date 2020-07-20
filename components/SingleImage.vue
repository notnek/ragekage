<template>
  <li class="group lowercase">
    <a :href="image" rel="noopener" target="_blank" v-text="image" />
    <button
      v-if="canCopy"
      class="hidden group-hover:inline-block text-gray-500 hover:underline lowercase text-sm"
      title="Click to copy image URL"
      @click="copy"
      v-text="copyText"
    />
  </li>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      canCopy: false,
      copied: false,
    };
  },
  computed: {
    copyText() {
      return this.copied ? 'Copied!' : 'Copy URL';
    },
  },
  mounted() {
    this.canCopy = !!navigator.clipboard;
  },
  methods: {
    async copy() {
      await navigator.clipboard.writeText(`${window.location}${this.image}`);
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
};
</script>
