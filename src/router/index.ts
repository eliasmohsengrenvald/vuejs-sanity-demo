import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/Posts.vue'),
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/Post.vue'),
    },
    ,
    {
      path: '/authors',
      name: 'authors',
      component: () => import('../views/Authors.vue'),
    },
    {
      path: '/author/:id',
      name: 'author',
      component: () => import('../views/Author.vue'),
    },
  ],
})

export default router
