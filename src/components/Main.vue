<template>
  <v-container>
     <b-carousel
      id="carousel"
      v-model="slide"
      :interval="150000000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/46927-BanG_Dream-AobaMoca-PC-Wallpaper.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/44809-BanG_Dream-MitakeRan-PC.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/45376-BanG_Dream-UdagawaTomoe-PC-Wallpaper.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/44723-BanG_Dream-UeharaHimari-PC.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/44731-BanG_Dream-HazawaTsugumi-PC.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

    <div class="mt-5 mb-3">
      <h2 class="text-center">What is Karutomo?</h2>
    </div>

    <b-container fluid class="p-4">
      <b-row>
        <b-col>
          <b-img center width="210%" rounded="circle" fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
          <h4 class="m-3 text-center">Multy play</h4>
        </b-col>
        <b-col>
          <b-img center width="210%" rounded="circle" fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
          <h4 class="m-3 text-center">Various contents</h4>
        </b-col>
        <b-col>
          <b-img center width="210%" rounded="circle" fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
          <h4 class="m-3 text-center">Reality</h4>
        </b-col>
      </b-row>
    </b-container>

    <div class="text-center m-5 pb-4">
      <g-button-nina color="green" size="button--size-l" gText="PLAY"></g-button-nina>
    </div>

    <div class="m-5">
      <h2 class="text-center">추천 카드</h2>
    </div>

    <v-layout
      justify-center
      class="m-3"
    >
      <v-flex xs12>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card
                color="#60a25d"
                class="white--text m-3"
                style="max-width: 21rem;"
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
                    <v-btn small color="success" class="ml-5">구독하러가기</v-btn>
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
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        cards: [
          { title: '로빈 카루타', src: require('../assets/로빈.jpg'), context: '원피스 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타', src: require('../assets/에이스.jpg'), context: '원피스 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타', src: require('../assets/조로.jpg'), context: '원피스 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 }
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
