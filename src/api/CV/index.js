import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default Vue.resource('http://localhost:3000/api/CVs{/id}', {}, {
})
