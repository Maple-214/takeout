<template>
  <div id="footer" class="footer-guide">
    <a href="javascript:;" class="guide-item on">
      <span class="iconfont icon-waimai-"></span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide-item">
      <span class="iconfont icon-icon-"></span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide-item">
      <span class="iconfont icon-dingdan"></span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide-item">
      <span class="iconfont icon-yonghu"></span>
      <span>用户</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "TakeoutFooterGuide",

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.footer-guide
  top-border-1px(#e4e4e4)
  position: fixed
  z-index: 100
  left: 0
  right: 0
  bottom: 0
  background-color: #fff
  width: 100%
  height 50px
  display: flex
  .guide-item
    display: flex
    flex: 1
    text-align: center
    flex-direction: column
    align-items: center
    margin: 5px
    color: #999
    &.on
      color: #02a774
    span
      font-size: 12px
      margin-top: 2px
      margin-bottom: 2px
      .iconfont
        font-size: 22px
</style>
