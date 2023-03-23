<template>
  <Featured />
  <HowToStream />
  <Stream />
</template>

<script>
import Featured from '@/components/browse/Featured.vue'
import HowToStream from '@/components/browse/HowToStream.vue'
import Stream from '@/components/browse/Stream.vue'
export default {
  name: 'Browse',
  components: {
    Featured,
    HowToStream,
    Stream,
  },
}
</script>
