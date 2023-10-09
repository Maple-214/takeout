<template>
  <div id="app-main">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { RECIVE_ADRESS } from "@/store/mutations-types";
export default {
  name: "TakeoutApp",
  components: {
    FooterGuide
  },

  data() {
    return {};
  },

  mounted() {
    this.$store.commit(RECIVE_ADRESS);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
#app-main
  width 100%
  height 100%
  background-color: #f5f5ff
  position relative
</style>
