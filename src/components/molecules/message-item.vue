<template>
  <div class="message-item text">
    <slot></slot>
  </div>
</template>
<script>

import statusbar from '@/components/atoms/device-statusbar'

export default {
  name: 'deviceScreen',
  components: {statusbar}
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';
  
  .message-item{
    position: relative;
    padding: 0.2rem 1.2rem}
  .message-item:after{
      content: '';
      position: absolute;
      bottom:  0.2rem;
      size: 0;
      box-shadow: 0 0.4rem 0.7rem -0.2rem color($black a(16%))}

  .message-item.text p{
    display: inline-block;
    max-width: 80%;
    padding: 0.8rem 1rem;
    font-family: 'Roboto', 'Noto';
    line-height: 1.1;
    box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1)}

  .message-item.text p .message-content{
    float: left;
    direction:  ltr;
    margin-bottom: -0.25rem;
    color: black}
    
  .message-item.text p .message-meta{
    float: right;
    direction: ltr;
    margin: 0.5rem -0.3rem -1rem 0;
    padding: 0.2rem 0 0.3rem 1rem;
    font-size: 1rem;}

  .message-item.text p .message-meta .gb{font-size: 1.4rem}

</style>
