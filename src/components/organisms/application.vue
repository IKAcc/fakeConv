<template>
  <div :class="['application', ui.toLowerCase()]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'application',
  components: {},
  props: {
    ui: {
      type: String,
      default: 'telegram'
    }
  }
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';

  .application{
    height: 49.5rem;
    position: relative;
  }
  .application.telegram{background-color: #ccd6df}
</style>
