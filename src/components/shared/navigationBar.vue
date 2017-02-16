<template>
  <div class="toolbar">
    <q-toolbar-title :padding="0">
    <a v-link="'login'" v-if="user==undefined">Login</a>
    <a @click="logout()" v-if="user!=undefined">Logout</a>
    <a v-link="'cv'">CV</a>
      Quasar Framework v{{$q.version}}
    </q-toolbar-title>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  asyncComputed: {
    user: async function () {
      let user = await this.$store.getters.user
      console.log(user)
      return user
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
</style>
