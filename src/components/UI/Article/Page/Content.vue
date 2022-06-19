<template>
  <div v-html="content" />
</template>

<script>
export default {
  props: {
    content: String
  },
  computed: {
    styling() {
      return (elements, styles) => {
          Array.prototype.forEach.call(elements, function(el) {
          el.style = styles;
        });
      };
    },
  },
  mounted() {
    this.styling(
      document.getElementsByTagName('h2'),
      `
        font-size: 1.6em;
        line-height: 1.5;
        margin: 2em 0 1.5rem;
        font-weight: bold;
      `
    );

    this.styling(
      document.getElementsByTagName('h3'),
      `
        font-size: 1.4em;
        line-height: 1.5;
        margin: 2em 0 1.5rem;
        font-weight: bold;
      `
    );

    this.styling(
      document.getElementsByTagName('img'),
      `
        margin: 1.5em 0;
        max-width: 100%;
        text-align: center;
      `
    );
  }
}
</script>