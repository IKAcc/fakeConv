<template>
  <li class="message-group">
    <slot></slot>
  </li>
</template>
<script>

import statusbar from '@/components/atoms/device-statusbar'

export default {
  name: 'deviceGreoup',
  components: {statusbar}
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';
  
  .message-group{padding: 0.2rem 0}
  
  .message-group.me .message-item.text p{background-color: #efffde}
  .message-group.me .message-item.text p .message-meta{color: #8fcb81}
  
  .message-group.them .message-item.text p{background-color: white}
  .message-group.them .message-item.text p .message-meta{color: #d4d7db}

  .message-group.me .message-item:last-of-type p{border-bottom-right-radius: 0}
  .message-group.me .message-item:last-of-type:after{
      border-bottom: 0.8rem solid #efffde;
      border-right: 0.8rem solid transparent;
      right: 0.6rem}
 
  .message-group.them .message-item:last-of-type p{border-bottom-left-radius: 0}
  .message-group.them .message-item:last-of-type:after{
      border-bottom: 0.8rem solid white;
      border-left: 0.8rem solid transparent;
      left: 0.6rem}
</style>
