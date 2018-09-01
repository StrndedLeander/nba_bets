import Vue from "vue"
import Router from "vue-router"
import Teams from "@/components/Teams"
import Register from "@/components/Register"
import Login from "@/components/Login"

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Teams",
      component: Teams
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
