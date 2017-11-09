import Router from 'vue-router'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Chat from '../components/Chat.vue'

import {auth, eventHub} from '../db/firebase'

var router = new Router({
  routes: [
    { path: '/login', name: 'login', component: Login},
    { path: '/logout', name: 'logout', component: Logout},
    { path: '/chat', name: 'chat', component: Chat, meta: { requiresAuth: true }},
    { path: '*', redirect: '/login' }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.authStatusReady){
      eventHub.$on('logged', (event) =>{
        if(event.status){
          next()
        }
        else{
          next({
            path: '/login',
          })
        }
      })
    }
    else if(!auth.currentUser){
      next({
        path: '/login',
      })
    }
    else{
      next()
    }
  } else {
    next()
  }
})

export {router, Router}
