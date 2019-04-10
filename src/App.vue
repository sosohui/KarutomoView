<template>
  <v-app>
    <v-toolbar color="white" app>
      <v-toolbar-title>
        <v-img
          :src="require('./assets/row_karutomo.png')"
          contain
          width="200"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout justify-end>
        <v-btn
          :to="{name: 'home'}"
          flat
        >
          <span class="m-2">Home</span>
        </v-btn>
        <v-btn
          :to="{name: 'MycardCollection'}"
          flat
        >
          <span class="m-2">Collection</span>
        </v-btn>
        <v-btn
          :to="{name: 'group'}"
          flat
        >
          <span class="m-2">Group</span>
        </v-btn>
        <loginModal/>
      </v-layout>


    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="pa-3" color="#56895b">
      <v-flex
      text-xs-center
      white--text
      >
        copyright@asobi
      </v-flex>
  </v-footer>
  </v-app>
</template>

<script>
import loginModal from './components/login_Modal'


export default {
  name: 'App',
  components: {
    loginModal
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
<style>
</style>
