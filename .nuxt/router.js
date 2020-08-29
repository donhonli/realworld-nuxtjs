import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d4b6ed8 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _26e67c0d = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _93bd640a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _e7a6e88a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _eab6075e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _017c951b = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _72f6cf08 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _0d4b6ed8,
    children: [{
      path: "",
      component: _26e67c0d,
      name: "home"
    }, {
      path: "/login",
      component: _93bd640a,
      name: "login"
    }, {
      path: "/register",
      component: _93bd640a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _e7a6e88a,
      name: "profile"
    }, {
      path: "/settings",
      component: _eab6075e,
      name: "settings"
    }, {
      path: "/editor",
      component: _017c951b,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _72f6cf08,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
