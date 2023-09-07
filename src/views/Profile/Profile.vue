<template>
  <section class="profile">
    <HeaderTop title="我的" />
    <div class="user-container border-1px">
      <div class="user-img">
        <img :src="userImage" alt="" />
      </div>
      <div class="user-center">
        <span>登录/注册</span>
        <p class="user-center-p">
          <span class="iconfont icon-phone"></span>
          <span class="phone">暂无绑定手机号</span>
        </p>
      </div>
      <div class="user-right">
        <span class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <div class="user-info border-1px">
      <div class="user-info-items right-border border-1px">
        <p class="user-info-p"><span class="balance">0.00</span>元</p>
        <span>我的余额</span>
      </div>
      <div class="user-info-items right-border border-1px">
        <p class="user-info-p"><span class="discount">0</span>个</p>
        <span>我的优惠</span>
      </div>
      <div class="user-info-items">
        <p class="user-info-p"><span class="score">0</span>分</p>
        <span>我的积分</span>
      </div>
    </div>
    <div class="user-list">
      <div class="user-list-item">
        <p class="user-list-item-left">
          <span class="iconfont icon-myorder"></span>
          <span>我的订单</span>
        </p>
        <div class="user-list-item-right">
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>

      <div class="user-list-item">
        <p class="user-list-item-left">
          <span class="iconfont icon-huiyuantequanshengritequan"></span>
          <span>积分商城</span>
        </p>
        <div class="user-list-item-right">
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
      <div class="user-list-item">
        <p class="user-list-item-left">
          <span class="iconfont icon-zhikaguanli"></span>
          <span>外卖会员卡</span>
        </p>
        <div class="user-list-item-right">
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
      <div class="user-list-item">
        <p class="user-list-item-left">
          <span class="iconfont icon-fuwuzhongxin"></span>
          <span>服务中心</span>
        </p>
        <div class="user-list-item-right">
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userImage from "../../assets/image/user.png";
import HeaderTop from "@/components/HeaderTop/HeaderTop";
export default {
  name: "TakeoutProfile",
  components: {
    HeaderTop
  },

  data() {
    return {
      userImage
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl";
.profile
  margin-top: 45px
  background-color: #fff
  .user-container
    background-color: #02a774
    display: flex
    color: #fff
    padding: 20px 10px
    justify-content: space-between
    align-items: center
    top-border-1px(#e4e4e4)
    .user-img
      background: #ccc
      width: 60px
      height: 60px
      border-radius: 100%
      overflow: hidden
      img
        width 100%
        height 100%
    .user-center
      margin-right: 130px
      display: flex
      flex-direction: column
      justify-content: center
      span
        margin-bottom: 10px
        left: -3px;
        top: -3px;
      .user-center-p
        position relative
        .icon-phone
          font-size: 20px
          position: absolute;
        .phone
          margin-left: 14px
      .user-right
        margin-right: 6px
  .user-info
    display: flex
    align-items: center
    padding-bottom: 4px
    bottom-border-1px(#e4e4e4)
    .user-info-items
      padding: 26px 30px
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      height: 36px
    .right-border
      // right-border-1px(#e4e4e4)
      // box-shadow: 0 0 0 1px #000 inset;
      border-right: 1px solid #e4e4e4
    .user-info-p
      margin-bottom: 10px
      span
        font-size: 27px
      .balance
        color: orange
      .discount
        color: #ff6700
      .score
        color: green
  .user-list-item
    display: flex
    padding: 0 14px
    justify-content: space-between
    height 50px
    align-items: center
    bottom-border-1px(#e4e4e4)
    .user-list-item-left
      display: flex
      align-items: center
      .iconfont
        font-size: 20px
        margin-right: 5px
    .user-list-item-right
      color: #bbb
</style>
