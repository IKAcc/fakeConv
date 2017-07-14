<template>
  <div class="device-volume soft-left-corner"></div>
</template>
<script>
export default {
  name: 'deviceVolume'
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';

  .nexus5 .device-volume{
    width: 0.3rem; height: 10rem;
    position: absolute;
    left: -0.3rem; top: 11rem;
    background: linear-gradient(to bottom, color($nexus5FrontColor  whiteness(35%)) 0%, color($nexus5FrontColor  whiteness(15%)) 80%, $nexus5FrontColor 100%)}
</style>
