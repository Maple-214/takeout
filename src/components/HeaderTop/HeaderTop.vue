<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header-title ellipsis">
      <span class="header-title-text">{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: "TakeoutHeaderTop",
  props: {
    title: {
      type: [String],
      required: true,
      default() {
        return "标题";
      }
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.header
    background-color: #02a774
    position: fixed
    z-index 100
    left: 0
    top: 0
    width 100%
    height 45px
    display: flex
    align-items: center
    justify-content: space-around
    color: #fff
    .icon-icon-
      font-size: 28px
    .header-title
      max-width: 200px
      font-size: 21px
</style>
