<template>
  <div :class="['application', ui.toLowerCase()]">
    <application-navbar :app="ui"></application-navbar>
    <slot></slot>
    <application-input :app="ui"></application-input>
  </div>
</template>
<script>

import applicationNavbar from '@/components/molecules/application-navbar'
import applicationInput from '@/components/molecules/application-input'

export default {
  name: 'application',
  components: {applicationNavbar, applicationInput},
  props: {
    ui: {
      type: String,
      default: 'telegram'
    }
  }
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';

  .application{
    height: 49.5rem;
    position: relative}
    
  .application.telegram{background-color: #ccd6df}

</style>
