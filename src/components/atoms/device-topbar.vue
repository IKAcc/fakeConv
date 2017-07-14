<template>
  <div class="device-topbar soft-right-corner"></div>
</template>
<script>
export default {
  name: 'deviceTopbar'
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';

  .nexus5 .device-topbar{
    width: calc(100% - 0.8rem); height: calc(100% - 0.6rem);
    position: absolute;
    top: 0.3rem; left: 0.4rem;
    border-radius: 20px;
    background: linear-gradient(135deg, color($nexus5FrontColor whiteness(40%)) 0%, $nexus5FrontColor 50%, $nexus5FrontColor 100%);
    box-shadow: inset 0 0 0 0.2rem $nexus5FrontColor,
                inset 0.1rem 0 0 0.2rem color(white a(10%))}
  .nexus5 .device-topbar:before{
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    height: 103.1%;
    width: calc(100% - 26px);
    border-radius: 60rem / 5rem;
    background: inherit;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: inset 0 0.3rem 0 -0.2rem $nexus5FrontColor, inset 0 -0.3rem 0 -0.2rem $nexus5FrontColor,
                inset 0 0.4rem 0 -0.2rem color(white a(10%))}

</style>
