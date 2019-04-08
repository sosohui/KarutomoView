<template>
  <v-container>
    <cardSelect></cardSelect>

    <v-flex xs12>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              v-for="(card,index) in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card
                color="#60a25d"
                class="white--text m-3"
                style="max-width: 21rem;"
                v-if="index < 2"
              >
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="card.src"
                    contain
                    width="125px"
                    height="175px"
                  ></v-img>
                </v-flex>
                <v-flex xs12>
                  <v-card-title
                    primary-title
                    class="p-2"
                  >
                    <h4>{{ card.title }}</h4>
                    <div>{{ card.context }}</div>
                    <div>#{{ card.tag }}</div>
                    <v-btn small color="success" class="ml-5 px-4">자세히보기</v-btn>
                      <span class="mx-1 mt-1">
                        <v-icon>remove_red_eye</v-icon>
                        <span class="mx-2">{{ card.hits }}</span>
                        <v-icon>star_border</v-icon>
                        <span class="mx-2">{{ card.hits }}</span>
                      </span>
                  </v-card-title>
                </v-flex>
              </v-layout>
              </v-card>
            </v-flex>
            <mdb-btn outline="dark-green"><span class="px-4"><span class="px-5"><v-icon x-large class="px-5">add</v-icon></span></span></mdb-btn>
          </v-layout>
        </v-container>
      </v-flex>


      <div>
        <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">Collapse contents Here</p>
          </b-card>
        </b-collapse>
      </div>



  </v-container>
</template>

<script>
  import { mdbBtn } from 'mdbvue';
  import cardSelect from './card_Select.vue';
  export default {
    name: 'ButtonPage',
    components: {
      mdbBtn,
      cardSelect
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        cards: [
          { title: '로빈 카루타', src: require('../assets/로빈.jpg'), context: '원피스 캐릭터 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타', src: require('../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타', src: require('../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>

</style>
