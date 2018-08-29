import Vue from "vue";
import Router from "vue-router";
import Bets from "@/components/Bets";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Bets",
      component: Bets
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

export default router;
