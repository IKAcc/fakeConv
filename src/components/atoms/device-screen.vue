<template>
  <div class="device-screen"></div>
</template>
<script>
export default {
  name: 'deviceScreen'
}
</script>
<style lang="postcss">

  @import '../../assets/postcss/_vars.pcss';
  
  .nexus5 .device-screen{
		position: relative;
		display: block;
    size: 100%;
		z-index: 2;
    border-radius: 0.1rem;
    background-color: color($nexus5FrontColor whiteness(5%));
    box-shadow: inset 0 0 0.5rem 0 color($black a(25%))}
        
</style>
