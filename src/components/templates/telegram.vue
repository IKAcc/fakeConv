<template>
  <main class="container">
    <section class="row">
      <div class="desktop-4">
        <nexus5></nexus5>
      </div>
    </section>
  </main>
</template>
<script>

import nexus5 from '@/components/organisms/nexus5'

export default {
  name: 'Telegram',
  components: {nexus5}
}
</script>
<style>
  main{padding: 2.5rem 0}
</style>
