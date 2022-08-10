import { createRouter, createWebHistory } from 'vue-router'
import SignUpIn from '../views/SignUpIn.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: SignUpIn
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
