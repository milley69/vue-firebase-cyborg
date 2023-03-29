<template>
  <section>
    <loader v-if="loader" />
    <div class="-mx-3 mt-0 flex flex-wrap" v-if="!loader">
      <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
        <div>
          <div class="-mx-3 mt-0 flex flex-wrap">
            <div class="mx-auto mt-0 w-2/3 max-w-full px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <img :src="game.images.imgMin" class="w-full overflow-hidden rounded-23px" alt="" />
            </div>
            <div class="mt-7/5 w-full max-w-full px-3 lg:mt-0 lg:w-2/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <div class="video relative h-0 w-full rounded-23px bg-black pb-[56.25%]" ref="video">
                <a
                  :href="`https://youtu.be/${game.images.trailer}`"
                  class="video__link absolute top-0 left-0 h-full w-full"
                >
                  <picture>
                    <source
                      :srcset="`https://i.ytimg.com/vi_webp/${game.images.trailer}/maxresdefault.webp`"
                      type="image/webp"
                    />
                    <img
                      class="video__media absolute top-0 left-0 h-full w-full rounded-23px border-0 border-none"
                      :src="`https://i.ytimg.com/vi/${game.images.trailer}/maxresdefault.jpg`"
                      :alt="game.title"
                    />
                  </picture>
                </a>
                <button
                  class="video__button absolute top-1/2 left-1/2 z-[1] hidden h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 cursor-pointer border-0 border-none bg-transparent p-0"
                  aria-label="start trailer"
                >
                  <svg width="68" height="48" viewBox="0 0 68 48">
                    <path
                      class="video__button-shape"
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    ></path>
                    <path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loader">
      <div class="-mx-3 mt-0 flex flex-wrap">
        <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
          <h2 class="my-15 text-center text-[45px] uppercase">{{ game.title }}</h2>
        </div>
        <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
          <div class="rounded-23px bg-primary-100 p-7/5">
            <div class="-mx-3 mt-0 flex flex-wrap">
              <!--  -->
              <div
                class="mt-0 mb-7/5 w-full max-w-full shrink-0 px-3 lg:mb-0 lg:w-1/2 lg:grow-0 lg:basis-auto lg:first-line:w-1/2"
              >
                <div class="mb-7/5 h-full rounded-23px bg-secondary px-7/5 pt-5 pb-7">
                  <div class="float-left">
                    <h4 class="block text-[15px]">{{ game.title }}</h4>
                    <span class="mt-[7px] block font-normal text-gray-66">{{ game.genre }}</span>
                  </div>
                  <ul class="float-right">
                    <li class="flex items-center justify-center text-right text-[14px] text-white">
                      <i class="bx bx-xs bxs-star pr-1 text-yellow-400"></i>
                      {{ game.rating }}
                    </li>
                    <li class="mt-[7px] flex items-center justify-center text-right text-[14px] text-white">
                      <i class="bx bx-xs bxs-cloud-download pr-1 text-primary-200"></i>
                      {{ numForm(game.downloaded, 'M') }}
                    </li>
                  </ul>
                </div>
              </div>
              <!--  -->
              <div class="mt-0 w-full max-w-full shrink-0 px-3 lg:w-1/2 lg:grow-0 lg:basis-auto">
                <div class="h-full rounded-23px bg-secondary px-7/5 pt-5 pb-7/5">
                  <ul>
                    <li class="inline-block w-[23%] text-center text-[14px] text-white">
                      <i class="bx bx-xs bxs-star mb-3 block text-yellow-400"></i>
                      {{ game.rating }}
                    </li>
                    <li class="inline-block w-[23%] text-center text-[14px] text-white">
                      <i class="bx bx-xs bxs-cloud-download mb-3 block text-primary-200"></i>
                      {{ numForm(game.downloaded, 'M') }}
                    </li>
                    <li class="inline-block w-[23%] text-center text-[14px] text-white">
                      <i class="bx bx-xs bxs-hdd mb-3 block text-primary-200"></i>
                      {{ game.size }}
                    </li>
                    <li class="inline-block w-[23%] text-center text-[14px] text-white">
                      <i class="bx bx-xs bxs-joystick-alt mb-3 block text-primary-200"></i>
                      {{ game.genre }}
                    </li>
                  </ul>
                </div>
              </div>
              <!--  -->
              <div
                class="mt-7/5 w-full max-w-full px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto"
                v-for="(img, index) in game.images.screenshot"
                :key="index"
              >
                <img :src="img" :alt="index" @click="openImage(img)" class="mx-auto mb-7/5 rounded-23px" />
              </div>
              <ModalImage v-if="modal.open" :image="modal.image" :title="game.title" @close="modal.open = false" />
              <!--  -->
              <div class="mt-0 w-full max-w-full shrink-0 px-3 lg:grow-0 lg:basis-auto">
                <p class="mb-0 text-[15px] leading-[30px] text-gray-66">
                  {{ game.description }}
                </p>
              </div>
              <!--  -->
              <div class="mt-7/5 w-full max-w-full shrink-0 px-3 text-center lg:grow-0 lg:basis-auto">
                <div class="main-border-button">
                  <button v-if="!checkHasGame()" @click.prevent="getGame(game.gameID)" type="button">
                    Get {{ game.title }} Now!
                  </button>
                  <button v-else-if="!checkDownload()" @click.prevent="downloadGame(game.gameID)">
                    Download {{ game.title }} Now!
                  </button>
                  <button v-else @click.prevent="">Launch {{ game.title }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DetailsRelated v-if="!loader" :id="game.gameID" />
</template>

<script>
import ModalImage from '@/components/app/ModalImage.vue'
import DetailsRelated from '@/components/DetailsRelated.vue'
import setupVideo from '@/utils/videoFrame.js'
import { mapGetters } from 'vuex'
export default {
  props: ['close'],
  components: { DetailsRelated, ModalImage },
  data() {
    return {
      modal: { open: false, image: null },
      game: null,
      user: {
        games: {},
      },
      loader: true,
    }
  },
  methods: {
    openImage(img) {
      if (window.innerWidth < 992) return
      this.modal.image = img
      this.modal.open = true
    },
    checkHasGame() {
      return !!Object.hasOwnProperty.call(this.user.games, this.game.gameID)
    },
    checkDownload() {
      const uGame = Object.hasOwnProperty.call(this.user.games, this.game.gameID) || null
      if (uGame) return this.user.games[this.game.gameID].download
      return false
    },
    async getGame(id) {
      await this.$store.dispatch('getGame', {
        gameID: id,
        dateAdded: Number(new Date()),
        download: false,
        hoursPlayed: 0,
      })
      this.user.games[id] = { download: false }
    },
    async downloadGame(id) {
      await this.$store.dispatch('downloadGame', id)
      this.user.games[id].download = true
    },
  },
  async mounted() {
    this.game = await this.$store.dispatch('fetchGameByID', this.$route.params.id)
    this.user.games = await this.getUser.games
    this.loader = false
    setTimeout(() => {
      setupVideo(this.$refs.video)
    }, 0)
  },
  computed: {
    ...mapGetters(['getUser']),
  },
}
</script>

<style lang="scss">
.video__button-shape {
  fill: #212121;
  fill-opacity: 0.8;
}

.video__button-icon {
  fill: #ffffff;
}

.video__button:focus {
  outline: none;
}

.video:hover .video__button-shape,
.video__button:focus .video__button-shape {
  fill: #ff0000;
  fill-opacity: 1;
}

.video--enabled {
  cursor: pointer;
}

.video--enabled .video__button {
  display: block;
}
</style>
