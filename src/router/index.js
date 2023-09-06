import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import MSite from "@/views/MSite/MSite";
import Search from "@/views/Search/Search";
import Profile from "@/views/Profile/Profile";
import Order from "@/views/Order/Order";
Vue.use(Router);
const routes = [
  {
    path: "/msite",
    component: MSite
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/",
    redirect: "/msite"
  }
];

export default new Router({
  linkActiveClass: "footer-guide-active-link",
  routes
});
