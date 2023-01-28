import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import CreateUser from '@/views/CreateUser.vue'
import UserPageView from '@/views/UserPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UsersView',
      component: UsersView
    },
    {
      path: '/create',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/user/:id',
      name: 'UserPageView',
      component: UserPageView
    }
  ]
})

export default router
