<template>
  <section class="msite">
    <!-- 首页头部 -->
    <header class="header">
      <!-- <span class="header-search"></span> -->
      <span class="iconfont icon-icon-"></span>
      <span class="header-title ellipsis">
        <span class="header-title-text">昌平区北七家洪福科技园(337省道)</span>
      </span>
      <span class="header-login">
        <span class="header-login-text">登录|注册</span>
      </span>
    </header>
    <!-- 首页导航 -->
    <!-- <nav class="msite-nav">
      <div class="swiper-container">
        <div class="swiper-wrappee">
          <div class="swiper-slide">
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="" alt="" />
              </div>
              <span>甜品</span>
            </a>
          </div>
        </div>
      </div>
    </nav> -->
    <!-- 首页附近商家 -->
    <!-- <div class="msite-shop-list">
      <div class="shop-header">
        <span class="iconfont icon-icon-"></span>
        <span class="shop-header-title">附近商家</span>
      </div>
      <div class="shop-container">
        <ul class="shop-list">
          <li class="shop-li border-1px">
            <a href="">
              <div class="shop-left">
                <img src="" alt="" class="shop-img" />
              </div>
              <div class="shop-right">
                <section class="shop detail header"></section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "TakeoutMSite",

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl";
.msite
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
    .icon-icon-
      font-size: 28px
    .header-title
      max-width: 200px
      font-size: 21px

  // .msite-nav
  //   bottom-border-1px(#e4e4e4)
  //   margin-top: 45px
  //   height 200px
  //   background-color: #fff
  //   .swiper-container
  //     width 100%
  // .msite-shop-list
  //   top-border-1px(#e4e4e4)
  //   margin-top: 10px
  //   background-color: #fff
</style>
