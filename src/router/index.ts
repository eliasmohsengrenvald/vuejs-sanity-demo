import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
