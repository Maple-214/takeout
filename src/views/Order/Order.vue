<template>
  <section class="order">
    <HeaderTop title="订单列表" />
    <div class="order-container">
      <div class="bg-img">
        <div class="bg-box">
          <img :src="imageUrl" alt="" srcset="" />
          <span class="bg-text">登录后查看外卖订单</span>
        </div>
      </div>
      <div class="bg-btn">立即登录</div>
    </div>
  </section>
</template>

<script>
import imageUrl from "../../assets/image/bg1.png";
import HeaderTop from "@/components/HeaderTop/HeaderTop";

export default {
  name: "TakeoutOrder",
  components: {
    HeaderTop
  },

  data() {
    return {
      imageUrl
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.order
  margin-top: 45px
  background-color: #fff
  min-height: calc(100vh - 50px);
  display: flex
  .order-container
    flex: 1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-bottom: 50px
    .bg-img
      .bg-box
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
      img
        width 208px
        height 208px
    .bg-btn
      width: 100px;
      background: #02a774
      padding: 11px 5px
      display: flex
      justify-content: center
      align-items: center
      border-radius: 4px
      color: #fff
      margin-top: 10px
</style>
