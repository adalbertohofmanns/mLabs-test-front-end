import Vue from "vue";
// import Router from "vue-router";
import VueRouter from 'vue-router';
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: "/",name: "home",component: Home},
    {path: "/about",name: "about",component: About}
  ]
});
