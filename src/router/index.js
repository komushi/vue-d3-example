import Vue from 'vue'
import Router from 'vue-router'
import D3GeoDoubleLayerLoader from '@/components/D3GeoDoubleLayerLoader'
import D3GeoEventsLoader from '@/components/D3GeoEventsLoader'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/D3GeoDoubleLayerLoader',
      name: 'D3GeoDoubleLayerLoader',
      component: D3GeoDoubleLayerLoader
    },
    {
      path: '/D3GeoEventsLoader',
      name: 'D3GeoEventsLoader',
      component: D3GeoEventsLoader
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
