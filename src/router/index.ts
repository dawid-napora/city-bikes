import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    components: {
      default: () => import('@/views/Home.vue'),
      sidebar: () => import('@/components/NavigationDrawerNetworks.vue')
    }
  },
  {
    path: '/search/:query',
    name: 'Search',
    components: {
      default: () => import('@/views/Home.vue'),
      sidebar: () => import('@/components/NavigationDrawerSearch.vue')
    }
  },
  {
    path: '/network/:network',
    name: 'Network',
    components: {
      default: () => import('@/views/Home.vue'),
      sidebar: () => import('@/components/NavigationDrawerStations.vue')
    }
  },
  {
    path: '/network/:network/station/:station',
    name: 'Station',
    components: {
      default: () => import('@/views/Home.vue'),
      sidebar: () => import('@/components/NavigationDrawerStationSingle.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
