import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EverycardCollection from "./views/Everycard_Collection.vue";
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
      path: "/EverycardCollection",
      name: "EverycardCollection",
      component: EverycardCollection
    },
    {
      path: "/group",
      name: "group",
      component: Group
    }
  ]
});
