<template>
  <div>
    <form>
      <div>
        <input type="text" v-model='credential.email'>
      </div>
      <div>
        <input type="password" v-model='credential.password'>
      </div>
      <div>
        <button type="button" @click='login(credential)'>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credential: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function (v) {
      this.$store.dispatch('login', v)
    }
  }
}
</script>

<style>
</style>
