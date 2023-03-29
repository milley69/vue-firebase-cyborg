import { onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../main'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: Home,
    },
    {
      path: '/browse',
      name: 'browse',
      meta: { layout: 'main' },
      component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue'),
    },
    {
      path: '/details/:id',
      name: 'details',
      meta: { layout: 'main', useID: true },
      component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue'),
    },
    {
      path: '/clips',
      name: 'clips',
      meta: { layout: 'main' },
      component: () => import(/* webpackChunkName: "clips" */ '../views/Clips.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main', requiresAuth: true },
      component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      meta: { layout: 'main', requiresAuth: true },
      component: () => import(/* webpackChunkName: "settings" */ '../components/app/Setting.vue'),
    },
    {
      path: '/studio',
      name: 'studio',
      meta: { layout: 'main', requiresAuth: true },
      component: () => import(/* webpackChunkName: "studio" */ '../views/Studio.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth' },
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'auth' },
      component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, (user) => {
    let currentUser = null
    if (user) {
      currentUser = user.uid
    }
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) {
      next({ path: '/login', query: { message: 'login' } })
      return
    }
    next()
  })
})

export default router
