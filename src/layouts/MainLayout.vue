<template>
  <Header v-if="!loader" />

  <div class="container">
    <div class="-mx-3 mt-0 flex flex-wrap">
      <div class="mt-0 w-full max-w-full shrink-0 grow-0 basis-auto px-3">
        <div class="mt-28 rounded-3xl bg-secondary py-0 px-7/5 md:p-15">
          <Loader v-if="loader" />
          <RouterView v-else :key="$route.meta.useID ? $route.path : undefined" />
        </div>
      </div>
    </div>
  </div>
  <Footer v-if="!loader" />
</template>
<script>
import Footer from '@/components/app/Footer.vue'
import Header from '@/components/app/Header.vue'
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      loader: true,
    }
  },
  async mounted() {
    if (Object.keys(this.$store.getters.getUser).length) {
      await this.$store.dispatch('fetchUser')
    }
    this.loader = false
  },
}
</script>
