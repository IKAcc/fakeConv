<template>
  <div id="app" class="grey-lighten-5">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/postcss/style.pcss"></style>
<style scoped>
  #app{min-height: 100vh}
</style>
