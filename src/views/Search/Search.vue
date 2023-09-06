<template>
  <section class="search">
    <header class="header">
      <a href="" class="header-header">
        <span class="header-title">搜索</span>
      </a>
    </header>
    <form action="#" class="search-form clearfix">
      <input type="search" name="search" placeholder="请输入商家或美食名称" />
      <input type="submit" name="submit" class="search-submit" />
    </form>
  </section>
</template>

<script>
export default {
  name: "TakeoutSearch",

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.search
  width 100%
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
    a
      color: #fff
    .header-title
      max-width: 200px
      font-size: 21px
  .search-form
    margin-top: 45px
    background-color: #fff
    padding: 12px 8px
    display: flex
    input
      height 35px
      padding: 0 4px
      border-radius: 2px
      font-weight: bold
      outline: none
      border: none
      background-color: #f7f8fa
    input[name="search"]
      flex: 1
    .search-submit
      width 60px
      color: #fff
      background-color: #02a774
      margin-left: 10px
</style>
