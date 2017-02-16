import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Set inteceptor
Vue.http.interceptors.push(function (request, next) {
  request.headers.set('Authorization', window.localStorage.getItem('token'))
  next(function (response) {
  })
})
export {default as User} from './User'
export {default as CV} from './CV'
