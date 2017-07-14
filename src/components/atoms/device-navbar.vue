<template>
  <div class="device-navbar black grey-lighten-5-text">
    <i class="gb gb_check_box_outline_blank gb_s24"></i>
    <i class="gb gb_panorama_fish_eye gb_s24"></i>
    <i class="gb gb_details gb_s24 gb_r90"></i>
  </div>
</template>
<script>
export default {
  name: 'deviceNavbar'
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';
  
  .nexus5 .device-navbar{
    height: 4.8rem;
    padding: 0.6rem}
  .nexus5 .device-navbar .gb{padding: 0.6rem 3.6rem}
        
</style>
