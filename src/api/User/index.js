import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default Vue.resource('http://localhost:3000/api/AppUsers{/id}', {}, {
  login: {
    url: 'http://localhost:3000/api/AppUsers/login',
    method: 'POST'
  }
})
