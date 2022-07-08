<template>
  <div :class="`${articleId}`">
    <div v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    articleId: String
  },
  mounted() {
    const contentHTML = document.getElementsByClassName(this.articleId);
    const contentText = this.getContentText(contentHTML);
    return this.replaceContent(contentHTML, contentText);
  },
  computed: {
    /**
     * APIから取得した記事本文のHTMLから文字列だけを取得
     */
    getContentText() {
      return (contentHTML) => {
        return contentHTML[0].innerText;
      }
    },
    /**
     * 記事本文から空白を除去して3行だけ表示するスタイルを付与
     * p要素のinnerTextにしてdiv要素と置換
     */
    replaceContent() {
      return (contentHTML, contentText) => {
        const p = document.createElement('p');
        p.innerText = contentText.replace(/\s+/g, "");
        p.style = 
        `
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        `
        return contentHTML[0].replaceWith(p);
      }
    }
  }
}
</script>