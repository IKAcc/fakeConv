<template>
  <div class="device-sleep soft-right-corner"></div>
</template>
<script>
export default {
  name: 'deviceSleep'
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';

  .nexus5 .device-sleep{
    width: 0.3rem; height: 4.5rem;
    position: absolute;
    right: -0.3rem; top: 7rem;
    background: linear-gradient(to bottom, color($nexus5FrontColor  whiteness(45%)) 0%, $nexus5FrontColor 80%, $nexus5FrontColor 100%)}

</style>
