<template>
  <div class="device-screen">
    <statusbar :class="statusbarColor"></statusbar>
    <slot></slot>
    <navbar></navbar>
  </div>
</template>
<script>

import statusbar from '@/components/atoms/device-statusbar'
import navbar from '@/components/atoms/device-navbar'

export default {
  name: 'deviceScreen',
  components: {statusbar, navbar},
  props: {
    statusbarColor: {
      type: String,
      default: 'black'
    }
  }
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';
  
  .nexus5 .device-screen{
		position: relative;
    size: 100%;
		z-index: 2;
    border-radius: 0.1rem;
    color: white;
    background-color: color($nexus5FrontColor whiteness(5%));
    box-shadow: inset 0 0 0.5rem 0 color($black a(25%))}
        
</style>
