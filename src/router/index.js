import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import MSite from "@/views/MSite/MSite";
import Search from "@/views/Search/Search";
import Profile from "@/views/Profile/Profile";
import Order from "@/views/Order/Order";
import Login from "@/views/Login/Login";
Vue.use(Router);
const routes = [
  {
    path: "/msite",
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/search",
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/order",
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/login",
    component: Login
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
