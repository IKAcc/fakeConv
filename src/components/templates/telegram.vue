<template>
  <main style="min-height: 200vh">
    <section class="telegram white-text">
      <div class="container">
        <div class="row">
          <div class="desktop-7 desktop-offset-5">
            <h2 class="half-margin">
              <i class="gb gb_telegram gb_s36 white telegram-text circle-corner"></i>
              <span>چت غیرواقعی (فیک) تلگرام</span>
            </h2>
            <p class="light-text">با ساخت یک چت غیرواقعی تلگرامی و گرفتن اسکرین‌شات، دوستای خودتون رو سر کار بزارین یا مدرک جعلی علیه کسی جمع کنین<small> (مسئولیت عواقبش پای خودتون)</small>.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="desktop-5">
            <div class="device-wrapper">
              <nexus5 :ui="'telegram'" :messages="messages" :person="person"></nexus5>
            </div>
          </div>
        </div>
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
      person: {
        name: 'Phil',
        avatar: 'https://yt3.ggpht.com/-puD8gV2fteI/AAAAAAAAAAI/AAAAAAAAAAA/CBhipfaxKKE/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
        status: '12:25 PM'
      },
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
<style scoped>

  @import '../../assets/postcss/_vars.pcss';

  section.telegram{padding: 8rem *}
  h2 .gb{
    padding: 0.9rem 1.1rem 0.7rem 0.6rem;
    margin-left: 1rem}
  .device-wrapper{
    height: 100vh;
    position: fixed;
    top: 0;
    padding: 4.5rem 0}
</style>
