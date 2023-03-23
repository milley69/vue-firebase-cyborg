<template>
  <section class="min-h-[380px] rounded-3xl bg-main-banner bg-cover bg-center px-15 py-20 text-center md:text-left">
    <div class="mt-0 -mr-3 -ml-3 flex w-full max-w-full flex-wrap lg:w-7/12">
      <h6 class="mb-6 w-full text-xl font-normal capitalize text-white">Welcome {{ username }} To Cyborg</h6>
      <h4 class="mb-6 w-full text-[35px] font-bold uppercase text-white md:text-[45px]">
        <em class="not-italic text-primary-200">Browse</em> Our Popular Games Here
      </h4>
      <router-link to="/profile" class="main-btn mx-auto md:mx-0">Browse Now</router-link>
    </div>
  </section>
  <HomePopular />
  <Library v-if="username" />
</template>

<script>
import HomePopular from '@/components/HomePopular.vue'
import Library from '@/components/Library.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: { HomePopular, Library },
  data() {
    return {
      username: null,
    }
  },
  computed: { ...mapGetters(['getUser']) },
  mounted() {
    this.username = this.getUser.info
  },
}
</script>
