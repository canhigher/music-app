import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  },
  {
      path:"/create",
      name:"CreateRoom",
      component: () => 
        import("../views/CreateRoom.vue")
  },
  
  {
      path:"/join",
      name:"JoinRoom",
      component: () => 
        import("../views/JoinRoom.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
