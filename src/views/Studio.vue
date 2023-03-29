<template>
  <section v-if="loader" class="flex flex-col gap-8 py-9">
    <loader />
    <h1 class="loader-text text-center text-lg font-bold">
      Please do not reload the page until the upload is completed
    </h1>
  </section>
  <section v-else>
    <div class="">
      <h1 class="text-2xl font-bold">Hello {{ user.info.username }}</h1>
      <p class="text-[15px] leading-[30px] text-gray-66">Here you can upload your clip.</p>
    </div>
    <form class="mt-5" @submit.prevent="uploadVideo">
      <div class="relative">
        <input
          v-model="clip.title"
          id="title"
          required=""
          type="text"
          name="text"
          autocomplete="off"
          class="w-full rounded-2xl border-[1.5px] border-gray-66 bg-transparent p-4 text-white transition-all valid:border-primary-200 valid:outline-0 focus:border-primary-200 focus:outline-0"
        />
        <label for="title" class="pointer-events-none absolute left-15px translate-y-4 text-[#e8e8e8] transition-all"
          >Title</label
        >
      </div>
      <div class="mt-8 flex justify-around">
        <!--  -->
        <StudioPreview @file="previewReady" ref="preview" :key="loader" />
        <!--  -->
        <StudioVideo @file="videoReady" ref="video" :key="loader" />
        <!--  -->
      </div>
      <div class="main-border-button mt-8 text-center" :class="{ 'border-no-active': !clipReady }">
        <button type="submit" :disabled="!clipReady">Upload a video</button>
      </div>
    </form>
  </section>
</template>

<script>
// import VueCropper from 'vue-cropperjs'
import { mapGetters } from 'vuex'
import StudioPreview from '../components/StudioPreview.vue'
import StudioVideo from '../components/StudioVideo.vue'
export default {
  components: { StudioPreview, StudioVideo },
  data() {
    return {
      clip: {
        title: '',
        preview: { file: '', base: '' },
        video: '',
      },
      user: {
        info: {},
        games: {},
        clips: [],
      },
      loader: false,
    }
  },
  methods: {
    async uploadVideo() {
      const clipData = {
        title: this.clip.title,
        preview: this.clip.preview,
        video: this.clip.video,
        lengthClips: this.user.clips.length,
      }
      this.loader = true
      const ready = await this.$store.dispatch('uploadVideo', clipData)
      if (ready !== true) {
        this.$ToastEr(`${ready}`, '#ec6090')
        this.loader = false
        return
      }
      this.clip.title = ''
      console.log('this.$refs.preview: ', this.$refs.preview)
      this.$refs.preview.remove()
      this.$refs.video.remove()
      this.$Toast(`Your clip has been uploaded successfully`)
      this.loader = false
    },
    previewReady(data) {
      this.clip.preview = data
    },
    videoReady(data) {
      this.clip.video = data
    },
  },
  async mounted() {
    this.user = await this.getUser
    this.loader = false
  },
  computed: {
    ...mapGetters(['getUser']),
    clipReady() {
      return !!this.clip.title && !!this.clip.preview.file && !!this.clip.preview.base && !!this.clip.video
    },
  },
}
</script>

<style scoped lang="scss">
#title:focus ~ label,
#title:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: rgb(39 41 42);
  padding: 0 0.2em;
  color: rgb(231 94 141);
}

.loader-text:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;
  font-size: 1.5rem;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.4em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: white;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
  }
}

//
</style>
