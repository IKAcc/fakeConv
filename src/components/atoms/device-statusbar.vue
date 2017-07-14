<template>
  <div class="device-statusbar" lang="en">
    <time class="time right">12:20</time>
    <i class="gb gb_battery_charging_full right"></i>
    <i class="gb gb_signal_cellular_null right fade"></i>
    <i class="gb gb_signal_wifi_4_bar right"></i>
    <i class="gb gb_image left"></i>
  </div>
</template>
<script>
export default {
  name: 'deviceStatusbar'
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';
  
  .nexus5 .device-statusbar{
    height: 2.5rem;
    padding: 0.6rem}
  .nexus5 .device-statusbar .gb{font-size: 1.4rem}
  .nexus5 .device-statusbar time{
    padding-left: 0.6rem;
    font-size: 1.2rem}
  .nexus5 .device-statusbar .right{
    padding-left: 0.3rem;
    float: right}
  .nexus5 .device-statusbar .left{
    padding-right: 0.3rem;
    float: left}
        
</style>
