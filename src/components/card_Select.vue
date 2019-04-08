<template>
  <v-flex text-xs-center>
    <mdb-btn-group class="justify-content-center">
      <mdb-btn outline="dark-green" darkWaves fab>
        <router-link
          :to="{name: 'MycardCollection'}"
          class="black--text ma-3 font-weight-black"
          style=" text-decoration: none"
        >
        나의 카드
        </router-link>
      </mdb-btn>
      <mdb-btn outline="dark-green" darkWaves fab>
        <router-link
          :to="{name: 'EverycardCollection'}"
          class="black--text ma-3 font-weight-black"
          style=" text-decoration: none"
        >
        모두의 카드
        </router-link>
      </mdb-btn>
      <mdb-btn outline="dark-green" darkWaves fab>
        <router-link
          :to="{name: 'home'}"
          class="black--text ma-3 font-weight-black"
          style=" text-decoration: none"
        >
        스토리 카드
        </router-link>
      </mdb-btn>
    </mdb-btn-group>
  </v-flex>
</template>

<script>
  import { mdbBtn, mdbBtnGroup } from 'mdbvue';
  export default {
    name: 'ButtonsGroup',
    components: {
      mdbBtn,
      mdbBtnGroup
    },
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
