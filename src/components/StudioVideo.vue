<template>
  <div
    class="flex h-72 w-72 flex-col items-center justify-between gap-[5px] rounded-[10px] bg-primary-100 bg-opacity-[0.041] p-[10px] shadow-[4px_4px_30px__rgba(0,0,0,0.2)]"
  >
    <label
      v-if="!clip.video"
      for="video"
      class="flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-white"
    >
      <i class="bx bx-cloud-download bx-md text-primary-200"></i>
      <p class="text-center text-white">Browse Video to upload!</p>
    </label>
    <div
      class="flex w-full flex-1 flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-primary-200"
      v-else
    >
      <i class="bx bxs-happy-beaming bx-md text-primary-200"></i>
      <p class="text-center text-white">The Video is ready to upload!</p>
    </div>
    <div class="flex h-10 w-full items-center justify-end rounded-[10px] p-2">
      <i
        @click="this.$refs.video.click()"
        class="bx bxs-file-image tr-300 cursor-pointer rounded-full bg-primary-100 p-2 text-primary-200 hover:bg-white"
      ></i>
      <p class="flex-1 text-center text-white" v-if="clip.video">{{ clip.video.name }}</p>
      <p class="flex-1 text-center text-white" v-else>Not selected file</p>
      <i
        @click="remove"
        class="bx bx-trash-alt tr-300 cursor-pointer rounded-full bg-primary-100 p-2 text-primary-200 hover:bg-white"
      ></i>
    </div>
    <input id="video" ref="video" type="file" class="hidden" accept=".mp4" @change="videoChanged" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      clip: {
        video: '',
      },
    }
  },
  methods: {
    remove(fullRemove = true) {
      this.$refs.video.value = ''
      this.clip.video = ''
      // FIXME:
      if (fullRemove) {
        this.$emit('file', this.clip.video)
      }
    },
    videoChanged(e) {
      const files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.clip.video = files[0]
        this.$emit('file', this.clip.video)
        this.remove(false)
      }
    },
  },
}
</script>
