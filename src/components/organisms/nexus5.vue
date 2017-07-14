<template>
  <div class="nexus5">
    <topbar></topbar>
    <volume></volume>
    <sleep></sleep>
    <camera></camera> 
    <sensor></sensor>
    <screen :statusbarColor="'telegram-accent'">
      <application :ui="'telegram'" :messages="messages">
        <slot></slot>
      </application>
    </screen>
  </div>
</template>
<script>

import topbar from '@/components/atoms/device-topbar'
import volume from '@/components/atoms/device-volume'
import sleep from '@/components/atoms/device-sleep'
import camera from '@/components/atoms/device-camera'
import sensor from '@/components/atoms/device-sensor'
import screen from '@/components/atoms/device-screen'
import application from '@/components/organisms/application'

export default {
  name: 'nexus5',
  components: {topbar, volume, sleep, camera, sensor, screen, application},
  props: {
    ui: {
      type: String,
      default: 'telegram'},
    messages: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';

  .nexus5{
    display: inline-block;
    position: relative;
		width: $nexus5Width;
		height: $nexus5Height;
    box-sizing: content-box;
    padding: 5rem 1.5rem;
    background: $nexus5BackColor;
    border-radius: 2rem;
    box-shadow: 2rem 3rem 8rem -2rem color($black a(53%))}
  .nexus5:before{
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    height: 103.1%;
    width: calc(100% - 26px);
    border-radius: 60rem / 5rem;
    background: inherit;
    transform: translateX(-50%) translateY(-50%)}
</style>
