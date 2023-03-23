<template>
  <div class="-mx-3 mt-0 flex flex-wrap">
    <div class="max-w-full px-3 lg:w-2/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
      <div class="rounded-23px bg-primary-100 p-7/5">
        <div class="heading-section relative">
          <h4 class="mb-7/5 text-[20px] text-primary-200 lg:text-[34px]">
            <em class="not-italic text-white underline">Featured</em> Games
          </h4>
          <div v-if="!loader" class="absolute top-[3px] right-0 my-0 mx-auto lg:top-2">
            <button type="button" class="border-none bg-none p-0 text-inherit" @click="this.$refs.carousel.prev()">
              <i
                class="bx bx-sm bx-chevron-left inline-block text-gray-66 transition-colors duration-300 hover:text-primary-200"
              ></i>
            </button>
            <button type="button" class="border-none bg-none p-0 text-inherit" @click="this.$refs.carousel.next()">
              <i
                class="bx bx-sm bx-chevron-right inline-block text-gray-66 transition-colors duration-300 hover:text-primary-200"
              ></i>
            </button>
          </div>
        </div>
        <Loader v-if="loader" />
        <Carousel v-else ref="carousel" :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
          <Slide v-for="(game, index) in games" :key="index">
            <div class="item">
              <div class="group relative overflow-hidden active:cursor-grab">
                <img :src="game.images.imgBig" :alt="game.title" class="h-[310px] w-[183px] max-w-full rounded-23px" />
                <div
                  class="invisible absolute -bottom-[100px] w-full text-center opacity-0 transition-all duration-400 group-hover:visible group-hover:bottom-15px group-hover:opacity-100"
                >
                  <h6
                    class="inline-block rounded-[25px] bg-primary-100 bg-opacity-[.95] py-[10px] px-5 text-[14px] font-semibold text-primary-200"
                  >
                    {{ game.streamNow }} Streaming
                  </h6>
                </div>
              </div>
              <h4 class="float-left mt-5 mb-0 inline-block w-[66%] px-1 text-left text-[15px]">
                <router-link :to="`details/${game.gameID}`" class="tr-300 hover:text-primary-200">{{
                  game.title
                }}</router-link
                ><br /><span class="mt-[7px] block font-normal text-gray-66">{{ game.online }} Online</span>
              </h4>
              <ul class="float-right mt-5 mb-0 px-1">
                <li class="text-right text-[14px] text-white">
                  <i class="bx bx-xs bxs-star text-yellow-400"></i> {{ game.rating }}
                </li>
                <li class="text-right text-[14px] text-white">
                  <i class="bx bx-xs bxs-cloud-download text-primary-200"></i> {{ numForm(game.downloaded, 'M') }}
                </li>
              </ul>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
    <TopDownload />
  </div>
</template>

<script>
import TopDownload from '@/components/browse/TopDownload.vue'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    TopDownload,
  },

  data: () => ({
    loader: true,
    games: [],
    settings: {
      autoplay: 6000,
      // autoplay: false,
    },

    breakpoints: {
      200: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      575: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      1200: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
  async mounted() {
    this.games = await this.$store.dispatch('fetchGames')
    this.loader = false
  },
})
</script>

<style>
.carousel__slide {
  align-items: normal;
}
</style>
