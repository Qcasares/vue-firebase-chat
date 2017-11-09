<template lang="html">
  <div>
    <form>
      <h2>Login</h2>
      <input type="text" v-model="inputName" placeholder="Digite seu nome" autofocus/><br>
      <input type="text" v-model="inputKey" placeholder="Chave de acesso" @keyup.enter="login()"/><br>
      <button type="button" @click="login()"> Entrar </button>
      <div v-if="loading">
        <img src="../assets/imgs/ajax-loader.gif"></img>
      </div>
      <h4 class="error" v-if="error != ''">
        {{error}}
      </h4>
    </form>
  </div>
</template>

<script>
import {auth, eventHub, defaultEmail} from '../db/firebase'

export default {
  name: 'Login',
  data(){
    return{
      error: '',
      inputName: '',
      inputKey: '',
      loading: false
    }
  },
  methods: {
    login(){
      var self = this
      self.error =  ""
      self.loading = true
      localStorage.userName = this.inputName
      auth.signInWithEmailAndPassword(defaultEmail, self.inputKey).catch( (error) => {
        self.loading = false
        self.error =  error.message
      })
    }
  },
  beforeCreate(){
    if(auth.currentUser){
      this.$router.replace('/chat')
    }
  }
}
</script>

<style>
  @import '../assets/css/style.css'
</style>
