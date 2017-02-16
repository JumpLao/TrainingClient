import Vue from 'vue'
import Vuex from 'vuex'
import {User} from './../api'
Vue.use(Vuex)

const state = {
  token: window.localStorage.getItem('token'),
  user: undefined,
  userId: window.localStorage.getItem('userId')
}
const mutations = {
  setUser: function (state, payload) {
    state.token = payload.id
    state.userId = payload.userId
    window.localStorage.setItem('token', state.token)
    window.localStorage.setItem('userId', state.userId)
  },
  clearUser: function (state) {
    state.token = undefined
    state.userid = undefined
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userId')
  }
}
const actions = {
  login: function ({commit, state}, payload) {
    User.login(payload).then(function (rsp) {
      commit('setUser', rsp.body)
    }, function (err) {
      console.log('Login error', err)
    })
  },
  logout: function ({commit, state}, payload) {
    console.log('Loggin out')
    commit('clearUser')
  }
}
const getters = {
  user: function (state, getter) {
    console.log('Get user')
    return User.get({id: state.userId}).then(function (rsp) {
      return rsp.body
    }, function (err) {
      console.log('Get user error', err)
      return null
      // throw new Error(err)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
