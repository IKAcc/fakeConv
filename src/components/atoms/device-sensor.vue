<template>
  <div class="device-sensor circle-corner"></div>
</template>
<script>
export default {
  name: 'deviceSensor'
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';

  .nexus5 .device-sensor{
    $sensorSize: 1.2rem;
    position: absolute;
    top: 1.8rem; left: 50%;
    size: $sensorSize;
    margin-left: calc($sensorSize / -2);
    background: $nexus5SensorColor;
    z-index: 3;
    box-shadow: inset 0.2rem 0.1rem 0.2rem 0 color($black a(45%)),
                inset -0.1rem -0.1rem 0.1rem 0 color($white a(18%))}

</style>
