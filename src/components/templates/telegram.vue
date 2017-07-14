<template>
  <main class="container">
    <section class="row">
      <div class="desktop-4">
        <nexus5 :ui="'telegeram'" :messages="messages"></nexus5>
      </div>
    </section>
  </main>
</template>
<script>

import nexus5 from '@/components/organisms/nexus5'

export default {
  name: 'Telegram',
  components: {nexus5},
  data () {
    return {
      messages: [
        {
          id: 0,
          from: 'me',
          items: [
            {
              id: 0,
              from: 'me',
              content: 'سلام دنیا',
              date: '5:46 PM',
              edited: false,
              seen: true},
            {
              id: 1,
              from: 'me',
              content: 'لورم ایپسوم متن ساختگی',
              date: '5:46 PM',
              edited: false,
              seen: true},
            {
              id: 2,
              from: 'them',
              content: 'Lorem ipsum dolor sit',
              date: '5:46 PM',
              edited: false,
              seen: true}
          ]
        },
        {
          id: 1,
          from: 'them',
          items: [
            {
              id: 3,
              from: 'them',
              content: '* hello world',
              date: '5:47 PM',
              edited: false,
              seen: true},
            {
              id: 4,
              from: 'them',
              content: 'at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla',
              date: '5:47 PM',
              edited: false,
              seen: true}
          ]
        },
        {
          id: 2,
          from: 'me',
          items: [
            {
              id: 5,
              from: 'me',
              content: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی',
              date: '5:48 PM',
              edited: true,
              seen: false}
          ]
        }
      ]
    }
  }
}
</script>
<style>
  main{padding: 2.5rem 0}
</style>
