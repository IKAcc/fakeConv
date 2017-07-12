import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Telegram from '@/components/templates/telegram'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/telegram',
      name: 'Telegram',
      component: Telegram
    }
  ]
})
