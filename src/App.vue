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
      <v-btn
        :to="{name: 'home'}"
        flat
      >
        <span class="m-2">Home</span>
      </v-btn>
      <v-btn
        :to="{name: 'collection'}"
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
      <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
        >
          User
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Login?</v-card-title>
        <v-card-text>Login</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->
    <v-footer class="pa-3" color="green">
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
import HelloWorld from './components/HelloWorld'


export default {
  name: 'App',
  components: {
    HelloWorld
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
