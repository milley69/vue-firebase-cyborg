<template>
  <section>
    <loader v-if="loader" />
    <div v-else class="-mx-3 mt-0 flex flex-wrap">
      <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
        <div class="rounded-23px bg-primary-100 p-7/5">
          <div class="-mx-3 mt-0 flex flex-wrap">
            <div class="mt-0 w-full max-w-full px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <img src="../images/profile.jpg" class="rounded-23px" alt="" />
            </div>
            <div class="mt-0 w-full max-w-full !items-center px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <div class="flex h-full flex-col items-start justify-between">
                <button
                  type="button"
                  @click=""
                  class="tr-300 mb-0 inline-block cursor-pointer rounded-3xl px-2 py-2 text-gray-66 hover:bg-primary-200 hover:text-white"
                >
                  <i class="bx bxs-cog bx-sm align-text-top"></i>
                </button>
                <h4 class="text-2xl font-bold">{{ user.info.username }}</h4>
                <p class="text-[15px] leading-[30px] text-gray-66">
                  {{ user.info.about }}
                </p>
                <div class="main-border-button">
                  <router-link to="/studio" @click="">Load video</router-link>
                </div>
              </div>
            </div>
            <div class="mt-0 w-full max-w-full !items-center px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <ul class="rounded-23px bg-secondary p-7/5">
                <li class="mb-5 w-full border-b border-gray-66 pb-5 text-[14px] text-gray-66">
                  Games <span class="float-right font-medium text-primary-200">{{ gamesLength }}</span>
                </li>
                <li class="mb-5 w-full border-b border-gray-66 pb-5 text-[14px] text-gray-66">
                  Clips <span class="float-right font-medium text-primary-200">{{ clipsLength }}</span>
                </li>
                <li class="w-full text-[14px] text-gray-66">
                  Views <span class="float-right font-medium text-primary-200">{{ viewsAll }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="-mx-3 mt-0 flex flex-wrap">
            <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <div class="mt-7/5 border-t-2 border-t-secondary">
                <div class="-mx-3 mt-0 flex flex-wrap">
                  <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
                    <div class="heading-section mt-7/5">
                      <h4 class="mb-7/5 text-[20px] font-bold text-primary-200 md:text-[34px]">
                        <em class="not-italic text-white underline">Your Most Popular</em> Clips
                      </h4>
                    </div>
                  </div>
                  <div
                    class="mt-0 w-full max-w-full px-3 sm:w-1/2 sm:grow-0 sm:basis-auto lg:w-1/4 lg:shrink-0"
                    v-for="(clip, index) in user.clips"
                    :key="index"
                  >
                    <div class="mb-7/5 rounded-23px bg-secondary px-15px py-7/5">
                      <div class="mb-15px">
                        <img
                          :src="clip.poster"
                          class="img-play relative rounded-23px"
                          :alt="clip.title"
                          @click="watchClip(clip.video)"
                        />
                      </div>
                      <div>
                        <h4 class="inline-block text-[15px] font-bold text-white">{{ clip.title }}</h4>
                        <span class="float-right text-[14px] text-white">
                          <i class="bx bx-show text-primary-200"></i>
                          {{ clip.views }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <modal-clips v-if="modal.open" @close="modal = { open: false, clip: '' }" :video="modal.clip" />
                  <!-- <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto"></div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Library />
  </section>
</template>

<script>
import ModalImage from '@/components/app/ModalImage.vue'

import Library from '@/components/Library.vue'
import ModalClips from '@/components/modals/ModalClips.vue'
// import setupVideo from '@/utils/videoFrame.js'
import { mapGetters } from 'vuex'
export default {
  props: ['close'],
  components: { ModalImage, Library, ModalClips },
  data() {
    return {
      modal: { open: false, clip: '' },
      user: {
        info: {},
        games: {},
        clips: [],
      },
      loader: true,
    }
  },
  methods: {
    watchClip(clip) {
      this.modal.clip = clip
      this.modal.open = !this.modal.open
    },
    // logOut() {
    //   this.$store.dispatch('logout')
    //   window.location.reload()
    // },
  },
  async mounted() {
    // this.game = await this.$store.dispatch('fetchGameByID', this.$route.params.id)
    this.user = await this.getUser
    this.loader = false

    // setTimeout(() => {
    //   setupVideo(this.$refs.video)
    // }, 0)
  },
  computed: {
    ...mapGetters(['getUser']),
    gamesLength() {
      return JSON.stringify(this.user.games) === '{}' ? 0 : Object.keys(this.user.games).length
    },
    clipsLength() {
      return JSON.stringify(this.user.clips) === '{}' ? 0 : Object.keys(this.user.clips).length
    },
    viewsAll() {
      let view = 0
      for (const value of Object.values(this.user.clips)) {
        view += Number(value.views)
      }
      return view
    },
  },
}
</script>

<style lang="scss">
$primary-background-color: #e75e8d;
.video-js .vjs-control-bar,
.video-js .vjs-big-play-button,
.video-js .vjs-menu-button .vjs-menu-content {
  background-color: $primary-background-color;
}
.img-play::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-23px, -23px);
  width: 46px;
  height: 46px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  line-height: 46px;
  color: #ec6090;
}
</style>
