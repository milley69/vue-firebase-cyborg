<template>
  <section>
    <loader v-if="loader" />
    <div v-else class="-mx-3 mt-0 flex flex-wrap">
      <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
        <div class="rounded-23px bg-primary-100 p-7/5">
          <div class="-mx-3 mt-0 flex flex-wrap">
            <div class="mt-0 w-full max-w-full px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <img :src="user.info.avatar" class="rounded-23px" alt="avatar" />
            </div>
            <div class="mt-0 w-full max-w-full !items-center px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
              <div class="flex h-full flex-col gap-8">
                <button
                  v-if="myProfile"
                  type="button"
                  @click="setting.open = true"
                  class="tr-300 mb-0 inline-block cursor-pointer rounded-3xl px-2 py-2 text-gray-66 hover:bg-primary-200 hover:text-white"
                >
                  <i class="bx bxs-cog bx-sm align-text-top"></i>
                </button>
                <h4 class="text-2xl font-bold">{{ user.info.username }}</h4>
                <p class="text-[15px] leading-[30px] text-gray-66">
                  {{ user.info.about }}
                </p>
                <div v-if="myProfile" class="main-border-button">
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
                        <em class="not-italic text-white underline" v-if="myProfile">Your Most Popular</em>
                        <em class="not-italic text-white underline" v-else>Most Popular</em>
                        Clips
                      </h4>
                    </div>
                  </div>
                  <div
                    class="mt-0 w-full max-w-full px-3 sm:w-1/2 sm:grow-0 sm:basis-auto lg:w-1/4 lg:shrink-0"
                    v-for="(clip, index) in clipsToShow"
                    :key="index"
                  >
                    <div class="mb-7/5 rounded-23px bg-secondary px-15px py-7/5">
                      <div class="group relative mb-15px">
                        <img
                          :src="clip.poster"
                          class="relative cursor-pointer rounded-23px"
                          :alt="clip.title"
                          @click="watchClip(clip.video)"
                        />
                        <button
                          class="pointer-events-none absolute left-1/2 top-1/2 h-11 w-11 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white text-primary-200 opacity-60 group-hover:opacity-100"
                        >
                          <i class="bx bx-md bx-play pl-[0.3rem] align-middle"></i>
                        </button>
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
                  <div class="mt-0 w-full max-w-full px-3 text-center sm:grow-0 sm:basis-auto lg:shrink-0">
                    <div class="main-btn cursor-pointer" v-if="countClips < user.clips.length" @click="showMore">
                      <button>Load More Clips</button>
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
    <Library v-if="gamesLength" />
    <Setting v-if="setting.open" @closeSetting="setting.open = false" :user="user.info" />
  </section>
</template>

<script>
import Setting from '@/components/app/Setting.vue'
import Library from '@/components/Library.vue'
import ModalClips from '@/components/modals/ModalClips.vue'
import { mapGetters } from 'vuex'
export default {
  props: ['close', 'closeSetting'],
  components: { Library, ModalClips, Setting },
  data() {
    return {
      setting: { open: false },
      modal: { open: false, clip: '' },
      myProfile: true,
      user: {
        info: {},
        games: {},
      },
      countClips: 4,
      loader: true,
    }
  },
  methods: {
    watchClip(clip) {
      this.modal.clip = clip
      this.modal.open = !this.modal.open
    },
    showMore() {
      this.countClips += 4
    },
    // logOut() {
    //   this.$store.dispatch('logout')
    //   window.location.reload()
    // },
  },
  async mounted() {
    if (!!this.$route.params.id) {
      this.user = await this.$store.dispatch('getUserFromDB', this.$route.params.id)
      this.myProfile = false
      this.loader = false
      return
    }
    this.user = await this.getUser
    this.loader = false
  },
  watch: {
    'setting.open': async function (val, oldVal) {
      if (!val) {
        this.user = await this.getUser
        console.log(`новое значение: ${val}`)
      }
      // console.log(`новое значение: ${val}, старое: ${oldVal}`)
      // this.user = await this.getUser
    },
  },
  computed: {
    ...mapGetters(['getUser']),
    clipsToShow() {
      return this.user.clips.slice(0, this.countClips)
    },
    gamesLength() {
      return JSON.stringify(this.user.games) === '{}' || typeof this.user.games === 'undefined'
        ? 0
        : Object.keys(this.user.games).length
    },
    clipsLength() {
      return JSON.stringify(this.user.clips) === '{}' || typeof this.user.clips === 'undefined'
        ? 0
        : Object.keys(this.user.clips).length
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
</style>
