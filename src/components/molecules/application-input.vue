<template>
  <div v-if="app.toLowerCase() === 'telegram'" class="application-input white" dir="ltr">
    <div class="row align-content-middle grey-lighten-1-text">
      <div class="all-8 half-gutter align-left">
        <i class="gb gb_mood"></i>
        <p class="no-margin">Message</p>
      </div>
      <div class="all-4 half-gutter align-right">
        <i class="gb gb_attach_file"></i>
        <i class="gb gb_mic"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'applicationInput',
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
  
  .telegram .application-input{
    position: absolute;
    bottom: 0; right: 0;
    width: 100%;
    box-shadow: 0 -0.2rem 0.7rem -0.2rem color($black, a(6%));
    z-index: 1}
  .telegram .application-input p{
    display: inline-block;
    padding: 1rem 0 1rem 0.6rem;
    font-size: 1.6rem}
  .telegram .application-input .gb{font-size: 2.6rem;}
  .telegram .application-input .gb_mic{padding-left: 0.4rem}
  .telegram .application-input .gb_attach_file{transform: rotate(225deg)}

</style>
