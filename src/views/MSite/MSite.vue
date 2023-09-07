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
      <div class="shop-container">
        <ul class="shop-list">
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
          <li class="shop-li">
            <div class="shop-li-left">
              <img
                src="https://img.alicdn.com/imgextra/i4/2210015248674/O1CN01q7nXuc2DwkL2sHNN0_!!2210015248674-0-koubei.jpg_400x400Q85s50.jpg_.webp"
                alt=""
                class="shop-li-left-img"
              />
            </div>
            <div class="shop-li-right">
              <p class="card-takeaway__title-box">
                <img
                  class="card-takeaway__title-icon"
                  src="https://img.alicdn.com/imgextra/i1/O1CN019faQdO1LH4wznF9y0_!!6000000001273-2-tps-102-42.png"
                  alt=""
                  srcset=""
                />
                <span class="card-takeaway__title">
                  华莱士·全鸡汉堡(嘉佳隆超市店)
                </span>
              </p>
              <p class="card-takeaway__store-info">
                <span class="card-takeaway__store-point-group">4.6分</span>
                <span class="card-takeaway__store-sell">月售100+</span>
                <span class="card-takeaway__store-distance">30分钟</span>
                <span class="card-takeaway__store-time">1.5km</span>
              </p>
              <p class="card-takeaway__delivery">
                <span class="card-takeaway__delivery-start">起送¥15</span>
                <span class="card-takeaway__delivery-fee">配送¥1</span>
                <span class="card-takeaway__delivery-fee-original">¥4</span>
                <span class="card-takeaway__delivery-tag-text">蓝骑士专送</span>
              </p>
              <div class="card-takeaway__recommend-tag-box">
                <p class="card-takeaway-top">
                  <span class="card-takeaway-top-text">万物皆可炸</span>
                </p>
              </div>
              <div class="card-takeaway__tags-one">
                <div class="card-takeaway__tag">
                  <span class="card-takeaway__tag-holder">60减3</span>
                  <span class="card-takeaway__tag-txt">60减3</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "TakeoutMSite",
  components: {
    HeaderTop
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
@import "../../common/stylus/mixins.styl";
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
    .shop-container
      margin-top: 0.5rem
      border-radius: 1rem 1rem 0 0
      .shop-list
        .shop-li
          position: relative
          width: 21.9375rem
          margin: 0 auto
          margin-bottom: 0.5rem
          background-color: #fff
          border-radius: 0.5rem
          min-height: 7.75rem
          display: flex
          bottom-border-1px(#e4e4e4)
          .shop-li-left
            .shop-li-left-img
              width 6.5rem
              height 6.5rem
              border-radius: .5rem
          .shop-li-right
            margin-left: 0.600rem
          .card-takeaway__title-box
            position: relative
            display: flex
            flex-flow: nowrap
            align-items: center
            height: 1.375rem
            font-size: 16px
            font-weight: bold
            color: #191919
            .card-takeaway__title-icon
              flex-shrink: 0;
              width: 2.125rem;
              height: 0.875rem;
              margin-right: 0.375rem;
              display: inline-block
            .card-takeaway__title
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap
              width: 9.0745rem
          .card-takeaway__store-info
          .card-takeaway__delivery
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            font-size: 0.75rem;
            height: 1.0625rem;
            margin-top: 0.0625rem

            .card-takeaway__delivery-start
             margin-right: 0.5rem
            .card-takeaway__delivery-fee
            .card-takeaway__delivery-start
              color: #666
            .card-takeaway__delivery-fee-original
              margin-left: 0.125rem;
              font-size: 0.6875rem;
              color: #999;
              text-decoration: line-through;
            .card-takeaway__delivery-tag-text
              text-align: center;
              padding: 0 0.25rem;
              font-size: 1.375rem;
              font-weight: 700;
              white-space: nowrap;
              border-radius: 0.5rem;
              transform: scale(0.5);
              color: rgb(2, 182, 253);
              border: 1px solid rgb(205, 241, 255);
              background: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255));
            .card-takeaway__store-point-group
              display: flex;
              align-items: center
              color: rgb(255, 99, 0)
              font-size: 0.875rem
            .card-takeaway__store-sell
            .card-takeaway__store-distance
            .card-takeaway__store-time
              margin-left: 0.5rem;
              font-size: 0.75rem;
              color: #666
          .card-takeaway__recommend-tag-box
            display: flex;
            flex-wrap: wrap;
            height: 1.25rem;
            margin-top: 0.25rem;
            overflow: hidden;
            .card-takeaway-top
              display: flex;
              align-items: center;
              height: 1.25rem;
              font-size: 0.6875rem;
              line-height: 1.25rem;
              border-radius: 0.25rem;
              margin-right: 0.25rem;
              background-color: rgb(254, 240, 229);
              color: rgb(254, 113, 0);
              padding: 0  0.375rem;
            .card-takeaway-top-text
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              max-width: 12.5rem
          .card-takeaway__tags-one
            display: flex
            height: 1.25rem
            margin-top: 0.125rem;
            .card-takeaway__tag
              display: flex
              justify-content: center
              align-items: center
              .card-takeaway__tag-holder,.card-takeaway__tag-txt
                height: 1rem;
                padding-right: 0.28125rem;
                padding-left: 0.28125rem;
                font-size: 0.6875rem;
                color: rgb(255, 75, 51);
                border-color: rgb(255, 201, 193);
                border-style: solid;
                border-width: 1px;
                border-radius: 0.5rem
                display: flex
                justify-content: center
                align-items: center
                margin-right: 0.25rem
              .card-takeaway__tag-txt
                color: rgb(102, 102, 102)
                border-color: rgb(178, 178, 178)
</style>
