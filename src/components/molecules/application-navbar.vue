<template>
  <div v-if="app.toLowerCase() === 'telegram'" class="application-navbar telegram white-text" dir="ltr">
    <div class="row align-content-middle">
      <div class="all-2">
        <i class="gb gb_arrow_back gb_s24"></i>
      </div>
      <div class="all-8 half-padding">
        <div class="row align-left">
          <div class="all-3 no-padding">
            <img src="https://yt3.ggpht.com/-puD8gV2fteI/AAAAAAAAAAI/AAAAAAAAAAA/CBhipfaxKKE/s48-c-k-no-mo-rj-c0xffffff/photo.jpg" class="user-avatar circle-corner" alt="">
          </div>
          <div class="all-9 no-padding align-middle">
            <p class="user-name no-margin">Phil</p>
            <p class="user-last-seen no-margin">last seen at 1:34 PM</p>
          </div>
        </div>
      </div>
      <div class="all-2">
        <i class="gb gb_more_vert gb_s24"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'applicationNavbar',
  props: {
    app: {
      type: String,
      default: 'telegram'
    }
  }
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';
  
  .telegram .application-navbar{
    position: absolute;
    top: 0; right: 0;
    width: 100%;
    box-shadow: 0 0.4rem 0.7rem -0.2rem color($black a(16%));
    z-index: 1}
  .telegram .application-navbar .user-name{
    font-size: 1.6rem;
    text-transform: capitalize}
  .telegram .application-navbar .user-last-seen{
    opacity: .73;
    font-size: 1.2rem;
    font-weight: 300}
  .telegram .application-navbar .user-avatar{
    display: block;
    size: 4rem}

</style>
