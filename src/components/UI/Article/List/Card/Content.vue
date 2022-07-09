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
    // TODO:今後コンポーネント構造から見直したほうがいい気がする
    // DOM操作しすぎ問題
    return this.replaceHtmlToPlaneText();
  },
  computed: {
    /**
     * 記事本文のHTMLのInnerTextを取り出し
     * p要素のinnerTextにしてdiv要素と置換
     * 空白を除去し + はみ出し分を三点リーダで表示するスタイルを付与
     */
    replaceHtmlToPlaneText() {
      return () => {
        const contentHTML = document.getElementsByClassName(this.articleId);
        const contentText = this.getContentPlaneText(contentHTML);
        return contentHTML[0].replaceWith(contentText);
      }
    },
    /**
     * APIから取得した記事本文のHTMLから文字列だけを取得
     */
    getContentPlaneText() {
      return (contentHTML) => {
        const planeText = contentHTML[0].innerText;
        return this.stylingPlaneText(planeText);
      }
    },
    /**
     * 抽出したテキストをp要素に入れ込みCSS付与
     */
    stylingPlaneText() {
      return (planeText) => {
        const p = document.createElement('p');
        p.innerText = planeText.replace(/\s+/g, "");
        p.style = 
        `
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          font-size: 12px;
        `
        return p;
      }
    }
  }
}
</script>