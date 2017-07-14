<template>
  <div class="device-camera circle-corner"></div>
</template>
<script>
export default {
  name: 'deviceCamera'
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';
  
  .nexus5 .device-camera{
    $cameraSize: 0.8rem;
    position: absolute;
    top: 2.1rem; left: 20%;
    size: $cameraSize;
    margin-left: calc($cameraSize / -2);
    background: $nexus5CameraColor;
    z-index: 3;
    box-shadow: inset 0.2rem 1px 0.1rem 0 color($black a(35%)),
                inset -0.1rem -0.1rem 0.1rem 0 color($white a(28%))}
        
</style>
