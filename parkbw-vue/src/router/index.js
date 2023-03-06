import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParkView from '../views/ParkView.vue'
import MySpotView from '../views/MySpotView.vue'
import HelpView from '../views/HelpView.vue'
import MoreView from '../views/MoreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/park',
    name: 'park',
    component: ParkView
  },
  {
    path: '/myspot',
    name: 'myspot',
    component: MySpotView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/more',
    name: 'more',
    component: MoreView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
