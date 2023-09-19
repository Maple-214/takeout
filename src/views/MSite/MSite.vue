<template>
  <section class="msite">
    <!-- 首页头部 -->
    <HeaderTop :title="'昌平区北七家洪福科技园(337省道)'">
      <template #left>
        <span class="iconfont icon-icon-"></span>
      </template>
      <template #right>
        <span class="header-login">
          <span class="header-login-text">登录|注册</span>
        </span>
      </template>
    </HeaderTop>
    <!-- 首页导航 -->
    <nav class="msite-nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-1.png" alt="" />
              </div>
              <span>甜品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-2.png" alt="" />
              </div>
              <span>服饰美妆</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-3.png" alt="" />
              </div>
              <span>美妆馆</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-4.png" alt="" />
              </div>
              <span>京东旅行</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-5.png" alt="" />
              </div>
              <span>京东国际</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-6.png" alt="" />
              </div>
              <span>京东超市</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-7.png" alt="" />
              </div>
              <span>京东电器</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-8.png" alt="" />
              </div>
              <span>京东到家</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-9.png" alt="" />
              </div>
              <span>京东生鲜</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-10.png" alt="" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-11.png" alt="" />
              </div>
              <span>美食</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-12.png" alt="" />
              </div>
              <span>简餐</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-13.png" alt="" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-14.png" alt="" />
              </div>
              <span>准时达</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-15.png" alt="" />
              </div>
              <span>预定早餐</span>
            </a>
            <a href="" class="link-to-food">
              <div class="food-container">
                <img src="@/assets/image/swiper-img-15.png" alt="" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite-shop-list">
      <div class="shop-header">
        <span class="shop-header-title">为你推荐附近的商家</span>
        <span class="shop-line shop-line-left"></span>
        <span class="shop-line shop-line-right"></span>
      </div>
      <ShoopList />
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import HeaderTop from "@/components/HeaderTop/HeaderTop";
import ShoopList from "@/components/ShoopList/ShoopList";
export default {
  name: "TakeoutMSite",
  components: {
    HeaderTop,
    ShoopList
  },

  data() {
    return {};
  },

  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }

      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },

      // 如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar"
      // }
    });
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.msite
  width 100%
  margin-top: 45px
  background-color: #fff
  .msite-nav
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          display: flex
          flex-wrap: wrap
          padding-bottom: 10px
          .link-to-food
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            width 25%
            padding-bottom: 14px
            .food-container
              img
                width 100%
  .msite-shop-list
    margin-bottom: 3.0048rem
    .shop-header
      position: relative
      display: flex
      align-items: center
      justify-content: center
      margin: 1.125rem 0.6875rem 1.0625rem
      .shop-header-title
        font-size: 0.75rem
        color: #999
      .shop-line
        position: absolute
        top: 0.375rem
        width: 7.1875rem
        height: 0.03125rem
        background: #ccc
      .shop-line-left
        left: 0
      .shop-line-right
        right: 0
</style>
