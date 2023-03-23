<template>
  <section class="mt-15 rounded-23px bg-primary-100 px-7/5 pt-7/5">
    <div class="-mx-3 mt-0 flex flex-wrap">
      <div class="mt-0 w-full max-w-full px-3 lg:shrink-0 lg:grow-0 lg:basis-auto">
        <div>
          <h4 class="mb-7/5 text-[20px] font-bold text-primary-200 md:text-[34px]">
            <em class="not-italic text-white underline">Other Related</em> Games
          </h4>
        </div>
      </div>

      <div
        class="mt-0 w-full max-w-full px-3 lg:w-1/2 lg:shrink-0 lg:grow-0 lg:basis-auto"
        v-for="game in onlySix"
        :key="game.gameID"
      >
        <router-link :to="`/details/${game.gameID}`" tag="div" class="item group block">
          <div class="relative mb-7/5 border-b border-secondary pb-[52px]">
            <img
              :src="game.images.imgMin"
              :alt="game.title"
              class="float-left mr-[15px] w-full max-w-[80px] rounded-[23px]"
            />
            <h4 class="text-15px tr-300 mb-[5px] inline-block w-[60%] text-white group-hover:text-primary-200">
              {{ game.title }} <br />
              <span class="mt-[7px] block font-normal text-gray-66">{{ game.genre }}</span>
            </h4>
            <ul class="absolute right-0 top-[15px]">
              <li class="flex items-center justify-center text-right text-[14px] text-white">
                <i class="bx bx-xs bxs-star pr-1 text-yellow-400"></i>
                {{ game.rating }}
              </li>
              <li class="flex items-center justify-center text-right text-[14px] text-white">
                <i class="bx bx-xs bxs-cloud-download pr-1 text-primary-200"></i>
                {{ numForm(game.downloaded, 'M') }}
              </li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      loader: true,
      games: [],
    }
  },
  async mounted() {
    this.games = await this.$store.dispatch('fetchGames')
    this.loader = false
  },
  computed: {
    onlySix() {
      const delID = this.games.findIndex((game) => game.gameID === this.id)
      this.games.splice(delID, 1)
      return this.games.slice(0, 6)
    },
  },
}
</script>
