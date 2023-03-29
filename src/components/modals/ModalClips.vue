<template>
  <div
    class="setting_bg fixed left-0 right-0 top-0 bottom-0 z-50 h-screen w-full bg-primary-100 bg-opacity-80"
    @click="$emit('close')"
  ></div>
  <div class="setting_modal container fixed left-0 right-0 top-0 z-[51] mt-8 rounded-23px bg-secondary">
    <div class="overflow-y-hidden p-[24px]">
      <video ref="videoPlayer" class="video-js"></video>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  emits: ['close'],
  props: {
    video: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      player: null,

      videoOptions: {
        autoplay: true,
        controls: true,
        loop: true,
        mute: true,
        aspectRatio: '4:3',
        breakpoints: {
          tiny: 300,
          xsmall: 400,
          small: 500,
          medium: 600,
          large: 700,
          xlarge: 800,
          huge: 900,
        },
        sources: [
          {
            src: this.video,
            type: 'video/mp4',
          },
        ],
      },
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.videoOptions, () => {
      this.player.log('onPlayerReady', this)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>

<style scoped lang="sass">
.setting_bg
  animation: setting_bg .5s ease-in-out
  @keyframes setting_bg
    from
      opacity: 0
      // transform: scale(0.5)
.setting_modal
  animation: setting_modal .5s ease-in-out
  @keyframes setting_modal
    from
      transform: translateY(-50%)
</style>
