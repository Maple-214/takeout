<template>
  <div id="footer" class="footer-guide border-1px">
    <router-link
      v-for="link in footerLinks"
      :key="link.path"
      :to="link.path"
      class="guide-item"
    >
      <span class="iconfont" :class="link.icon"></span>
      <span class="text">{{ link.title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TakeoutFooterGuide",

  data() {
    return {
      footerLinks: [
        {
          path: "/msite",
          title: "外卖",
          icon: "icon-waimai-"
        },
        {
          path: "/search",
          title: "搜索",
          icon: "icon-icon-"
        },
        {
          path: "/order",
          title: "订单",
          icon: "icon-dingdan"
        },
        {
          path: "/profile",
          title: "用户",
          icon: "icon-yonghu"
        }
      ]
    };
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
    justify-content: center;
    flex: 1
    text-align: center
    flex-direction: column
    align-items: center
    margin: 5px
    color: #999
    &.footer-guide-active-link
      color: #02a774
    .text
      font-size: 12px
      margin-top: 2px
      margin-bottom: 2px
      .iconfont
        font-size: 22px
</style>
