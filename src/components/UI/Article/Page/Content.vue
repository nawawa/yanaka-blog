<template>
  <section>
    <div v-html="content" />
  </section>
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
    const section = document.getElementsByTagName('section');

    this.styling(
      section[0].getElementsByTagName('h2'),
      `
        font-size: 1.6em;
        line-height: 1.5;
        margin: 2em 0 1.5rem;
        font-weight: bold;
      `
    );

    this.styling(
      section[0].getElementsByTagName('h3'),
      `
        font-size: 1.4em;
        line-height: 1.5;
        margin: 2em 0 1.5rem;
        font-weight: bold;
      `
    );

    this.styling(
      section[0].getElementsByTagName('img'),
      `
        margin: 1.5em 0;
        max-width: 100%;
        text-align: center;
      `
    );
  }
}
</script>

<style lang="scss" scoped>
  section {
    padding: 30px 0 100px;
    border-top: 1px solid #a2a2a2;
  }
</style>