// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBwidHF3QQIsgWVRPq6U5wXnCl4IBTC2EI',
      authDomain: 'farmen-header.firebaseapp.com"',
      databaseURL: 'https://farmen-header.firebaseio.com',
      projectId: 'farmen-header',
      storageBucket: '',
      messagingSenderId: '517175373282'
    })
  }
})
