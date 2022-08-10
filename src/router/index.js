import { createRouter, createWebHistory } from 'vue-router'
import SignUpIn from '../views/SignUpIn.vue'
import MessageRoom from '../views/MessageRoom.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: SignUpIn
  },
  {
    path: '/message',
    name: 'message',
    component: MessageRoom
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
