<template>
  <div class="application-body">
    <ul class="message-wrapper">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'applicationBody'
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';
  
  .application-body{
    position: relative;
    top: 0; right: 0;
    size: 100%;
    overflow: hidden}

  .application-body > .message-wrapper{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 0 5.8rem;
    margin: 0;
    list-style: none}

</style>
