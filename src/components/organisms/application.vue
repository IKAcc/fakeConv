<template>
  <div :class="['application', ui.toLowerCase()]">
    <application-navbar :app="ui"></application-navbar>
    <application-body>
      
      <message-group :class="messageGroup.from" v-for="messageGroup in messages" :key="messageGroup.id">

        <message-item :class="[messageGroup.from === 'me' ? 'align-right' : 'align-left']" v-for="message in messageGroup.items" :key="message.id">
          <p class="no-margin soft-corner">
            <span class="clearfix">
              <span class="message-content">{{message.content}}</span>
              <span class="message-meta">
                <span v-if="message.edited">edited</span>
                <span>{{message.date}}</span>
                <i :class="['gb', message.seen ? 'gb_done_all' : 'gb_done']"></i>
              </span>
            </span>
          </p>
        </message-item>

      </message-group>

    </application-body>
    <application-input :app="ui"></application-input>
  </div>
</template>
<script>

import applicationNavbar from '@/components/molecules/application-navbar'
import applicationBody from '@/components/molecules/application-body'
import applicationInput from '@/components/molecules/application-input'

import messageGroup from '@/components/molecules/message-group'
import messageItem from '@/components/molecules/message-item'

export default {
  name: 'application',
  components: {applicationNavbar, applicationBody, applicationInput, messageGroup, messageItem},
  props: {
    ui: {
      type: String,
      default: 'telegram'
    },
    messages: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="postcss" scoped>

  @import '../../assets/postcss/_vars.pcss';

  .application{
    height: 49.5rem;
    position: relative}
    
  .application.telegram{background-color: #ccd6df}

</style>
