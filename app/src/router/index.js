import Vue from 'vue'
import Router from 'vue-router'

const home = (resolve) => { require(["../views/home.vue"], resolve) }

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: resolve => { require(['../views/about.vue'], resolve) }
    },
    {
      path: '/contact',
      component: resolve => { require(['../views/contact.vue'], resolve) }
    }
  ]
});

export function createRouter() {
  return router
}