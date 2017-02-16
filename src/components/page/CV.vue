<template>
  <div>
    <form>
      <div>
        <input type="text" v-model="newItem.name"> <button type="button" @click="addNewCV(newItem)">Add</button>
      </div>
    </form>
    <div>
      <div v-for="cv in cvsWithoutAppUser">
        {{cv.name}}
      </div>
    </div>
  </div>
</template>

<script>
import {CV} from './../../api'
export default {
  data () {
    return {
      cvs: [],
      newItem: {
        name: ''
      }
    }
  },
  created () {
    console.log(this.$store)
    this.fetchCV()
  },
  computed: {
    cvsWithoutAppUser: function () {
      return this.cvs.map(function (cv) {
        return {name: cv.name}
      })
    }
  },
  methods: {
    addNewCV: function (obj) {
      let self = this
      CV.save(obj).then(function (rsp) {
        console.log('Add new CV', rsp)
        self.fetchCV()
      }, function (err) {
        console.log('Add cv error', err)
      })
    },
    fetchCV: function () {
      let self = this
      CV.get().then(function (rsp) {
        console.log('Get CV', rsp)
        self.cvs = rsp.body
      }, function (err) {
        console.log('GET CV error', err)
      })
    }
  }
}
</script>

<style>
</style>
