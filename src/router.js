import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Collection from "./views/Collection.vue";
import Group from "./views/Group.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/collection",
      name: "collection",
      component: Collection
    },
    {
      path: "/group",
      name: "group",
      component: Group
    }
  ]
});
