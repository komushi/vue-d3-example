<template>
  <div id="app">
    <b-breadcrumb :items="items"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [{
        text: 'D3GeoEventsLoader',
        href: '#/D3GeoEventsLoader'
      }, {
        text: 'D3GeoDoubleLayerLoader',
        href: '#/D3GeoDoubleLayerLoader'
      }, {
        text: 'HelloWorld',
        href: '#/'
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
