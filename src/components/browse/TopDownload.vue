<template>
  <div class="max-w-full px-3 lg:w-1/3 lg:shrink-0 lg:grow-0 lg:basis-auto">
    <div class="rounded-23px bg-primary-100 p-7/5">
      <div>
        <h4 class="mb-7/5 text-[20px] text-primary-200 lg:text-[29px]">
          <em class="not-italic text-white underline">Top</em> Downloaded
        </h4>
      </div>
      <Loader v-if="loader" />
      <ul v-else class="mb-0">
        <li
          class="group/item relative mb-7 inline-block w-full border-b border-secondary pb-7"
          v-for="(game, index) in onlyThree"
          :key="index"
        >
          <router-link :to="`/details/${game.gameID}`">
            <img
              :src="game.images.imgMin"
              :alt="game.title"
              class="group-hover/item:anime float-left mr-15px max-w-[80px] rounded-23px"
            />
            <h4 class="tr-300 pt-[7px] text-[15px] group-hover/item:text-primary-200">
              {{ game.title }}
            </h4>
            <h6 class="my-[5px] text-[15px] font-normal text-gray-66">{{ game.genre }}</h6>
            <span class="text- mr-15px text-white"
              ><i class="bx bx-xs bxs-star text-yellow-400"></i> {{ game.rating }}
            </span>
            <span class="text- mr-15px text-white"
              ><i class="bx bx-xs bxs-cloud-download text-primary-200"></i> {{ numForm(game.downloaded, 'M') }}</span
            >
            <div class="tr-300 hidden opacity-0 md:block md:group-hover/item:opacity-100" v-if="!hasGame(game.gameID)">
              <router-link to="/profile">
                <i
                  class="bx bx-xs bxs-cloud-download tr-300 absolute right-0 top-1/2 h-[46px] w-[46px] -translate-y-full rounded-full bg-secondary text-center leading-[46px] text-white hover:bg-white group-hover/item:text-primary-200"
                ></i>
              </router-link>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="text-center" v-if="!loader">
        <router-link class="tr-300 text-[15px] font-semibold text-primary-200 hover:text-white" to="/profile">
          View All Games
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    hasGame(game) {
      let hasGame = false
      for (const value of Object.values(this.user.games)) {
        hasGame ||= value.gameID === game && value.download
      }
      return hasGame
    },
  },
  data() {
    return {
      loader: true,
      user: {
        games: {},
      },
      games: [],
    }
  },
  async mounted() {
    this.games = await this.$store.dispatch('fetchGames')
    this.user.games = await this.getUser.games
    this.loader = false
  },
  computed: {
    ...mapGetters(['getUser']),
    onlyThree() {
      return this.games.slice(0, 3)
    },
  },
}
</script>
