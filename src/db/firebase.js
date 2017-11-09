import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Vue from 'vue'
import {firebaseConfig, defaultEmail} from './config'

app.initializeApp(firebaseConfig)

const auth = app.auth()
const db = app.database()
const eventHub = new Vue()

auth.authStatusReady = false
auth.onAuthStateChanged(function(user) {
  let status = user ? true : false

  auth.authStatusReady = true
  eventHub.$emit('logged', {status: status})
})

export {app, auth, db, eventHub, defaultEmail}
