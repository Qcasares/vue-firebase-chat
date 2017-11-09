<template lang="html">
  <div>
    <h2>Hey, {{userName}}</h2>
    <input type="text" v-model="userMessage" @keyup.enter="send()" placeholder="Enter a message"/><br>
    <button type="button" @click="send()"></i> Send</button>
    <div>
      <h3>Message Board</h3>
      <div class="">
        Show <input type="number" v-model="maxMessages" step="1" min="1" max="15"> message(s)
      </div>
      <br>
      <message v-for="(message,index) in reversedMessages" :message="message" v-if="maxMessages > index" :key="message['.key']">
      </message>
      <br>
    </div>

  </div>
</template>

<script>

import {db} from '../db/firebase'
import Message from './Message.vue'
export default {
  data() {
    return {
      maxMessages: 15,
      userMessage: '',
      userName: ''
    }
  },
  firebase:{
    messages: db.ref('room1/messages').limitToLast(15)
  },
  methods: {
    send(){
      const date = new Date()
      this.$firebaseRefs.messages.push({
        name: this.userName,
        message: this.userMessage,
        date: date.getHours() + ":" + date.getMinutes()
      })
      this.userMessage = ""
    }
  },
  created(){
    this.userName = localStorage.userName
  },
  computed: {
    reversedMessages(){
      return this.messages.slice().reverse()
    }
  },
  components: {
    message: Message
  }
}
</script>
