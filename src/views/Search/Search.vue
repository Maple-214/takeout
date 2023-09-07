<template>
  <section class="search">
    <HeaderTop title="搜索" />
    <form action="#" class="search-form clearfix">
      <input type="search" name="search" placeholder="请输入商家或美食名称" />
      <input type="submit" name="submit" class="search-submit" />
    </form>
  </section>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";

export default {
  name: "TakeoutSearch",
  components: {
    HeaderTop
  },

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
