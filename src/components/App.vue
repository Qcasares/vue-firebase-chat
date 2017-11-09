<template>
  <div>
    <div id="loader" v-if="loading"></div>
    <navbar></navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import {auth,eventHub} from '../db/firebase'
import router from '../router'
import NavBar from './NavBar.vue'

export default {
  name: 'app',
  data () {
    return {
      loading: true
    }
  },
  created(){
    var self = this
    eventHub.$on('logged', (event) =>{
      if(event.status){
        self.$router.replace('/chat')
      }
      self.loading = false
    })
  },
  components:{
      navbar: NavBar
  }
}
</script>

<style media="screen">
  @import '../assets/css/style.css';

  #loader {
    background: url("http://www.aveva.com/Images/ajax-loader.gif") no-repeat scroll center center #AAA;
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
