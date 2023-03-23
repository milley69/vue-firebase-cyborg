<template>
  <section class="mt-15 rounded-[23px] bg-primary-100 p-7/5">
    <div class="mt-0 -mr-3 -ml-3 flex w-full flex-wrap">
      <div class="mt-0 w-full max-w-full shrink-0 grow-0 basis-auto pr-3 pl-3">
        <div class="heading-section">
          <h4 class="mb-7/5 text-[20px] font-bold text-primary-200 md:text-[34px]">
            <em class="not-italic text-white underline">Most Popular</em> Right Now
          </h4>
        </div>
        <div class="mt-0 -mr-3 -ml-3 flex flex-wrap">
          <div
            class="mt-0 max-w-full shrink-0 grow-0 basis-auto px-3 sm:w-1/2 lg:w-1/4"
            v-for="game in games"
            :key="game.gameID"
          >
            <router-link
              :to="`/details/${game.gameID}`"
              tag="div"
              class="item group mb-7/5 block rounded-[23px] bg-secondary py-7/5 px-15px"
            >
              <!-- <div class="item group mb-7/5 rounded-[23px] bg-secondary py-7/5 px-15px"> -->
              <div class="relative h-[138.45px] w-[180px] overflow-hidden rounded-[23px]">
                <img
                  class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                  :src="game.images.imgMin"
                  :alt="game.title"
                />
              </div>
              <h4
                class="text-15px tr-300 mt-5 mb-0 inline-block w-[70%] font-bold text-white group-hover:text-primary-200"
              >
                {{ game.title }} <br />
                <span class="mt-[7px] block font-normal text-gray-66">{{ game.genre }}</span>
              </h4>
              <ul class="float-right mt-5">
                <li class="flex items-center justify-center text-right text-[14px] text-white">
                  <i class="bx bx-xs bxs-star pr-1 text-yellow-400"></i>
                  {{ game.rating }}
                </li>
                <li class="flex items-center justify-center text-right text-[14px] text-white">
                  <i class="bx bx-xs bxs-cloud-download pr-1 text-primary-200"></i>
                  {{ numForm(game.downloaded, 'M') }}
                </li>
              </ul>
            </router-link>
          </div>
          <div class="mt-0 w-full max-w-full shrink-0 grow-0 basis-auto px-3" v-if="!loader">
            <div class="-mb-[53px] text-center">
              <router-link class="main-btn" to="/browse">Discover Popular</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HomePopular',
  data() {
    return {
      games: [],
      loader: true,
    }
  },
  async mounted() {
    this.games = await this.$store.dispatch('fetchGames')
    this.loader = false
  },
}
</script>
