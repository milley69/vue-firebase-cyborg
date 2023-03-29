<template>
  <section class="mt-15 rounded-23px bg-primary-100 p-7/5">
    <div class="w-full">
      <div class="heading-section">
        <h4 class="mb-7/5 text-[20px] font-bold text-primary-200 md:text-[34px]">
          <em class="not-italic text-white underline">Your Gaming</em> Library
        </h4>
      </div>
      <Loader v-if="loader" />
      <div
        v-else
        class="item mb-5 border-b border-solid border-secondary pb-5"
        v-for="(lib, index) in user.games"
        :key="lib.gameID"
      >
        <ul class="mb-0 mt-15px flex items-center justify-around">
          <li class="inline-block">
            <img
              :src="this.games[getGameById(lib.gameID)].images.imgMin"
              :alt="this.games[getGameById(lib.gameID)].title"
              class="w-full max-w-[80px] rounded-[23px]"
            />
          </li>
          <li class="inline-block">
            <h4 class="mb-[5px] max-w-[6rem] text-[15px] lg:max-w-[8rem]">
              {{ this.games[getGameById(lib.gameID)].title }}
            </h4>
            <span class="text-[14px] text-gray-66">{{ this.games[getGameById(lib.gameID)].genre }}</span>
          </li>
          <li class="inline-block">
            <h4 class="mb-[5px] text-[15px]">Date Added</h4>
            <span class="text-[14px] text-gray-66">{{ dateFilter(lib.dateAdded, 'toLib') }}</span>
          </li>
          <li class="inline-block">
            <h4 class="mb-[5px] text-[15px]">Hours Played</h4>
            <span class="text-[14px] text-gray-66">{{ timeForm(lib.hoursPlayed, 'HM') }}</span>
          </li>
          <li class="hidden md:inline-block">
            <h4 class="mb-[5px] text-[15px]">Currently</h4>
            <span class="text-[14px] text-gray-66">{{ lib.download ? 'Downloaded' : 'Added' }}</span>
          </li>
          <li class="inline-block">
            <div class="main-border-button">
              <button class="mr-2 hidden lg:inline-block" v-if="lib.download">Launch</button>
              <button class="mr-2 hidden lg:inline-block" @click="downloadGame(lib.gameID)" v-else>Donwload</button>
              <Dropdown align="center" :border="false" :toggle="true">
                <template #trigger>
                  <button class="!px-2 !py-2" type="button">
                    <i class="bx bx-dots-horizontal-rounded bx-sm align-top"></i>
                  </button>
                </template>
                <router-link
                  type="button"
                  class="tr-300 block w-full !bg-secondary p-2 capitalize text-primary-200 hover:!bg-white"
                  :to="`/details/${lib.gameID}`"
                >
                  detail
                </router-link>
                <button
                  @click.prevent="openModal(lib.gameID)"
                  type="button"
                  v-if="lib.download"
                  class="tr-300 hidden w-full !bg-secondary p-2 capitalize text-primary-200 hover:!bg-white lg:block"
                >
                  delete
                </button>
              </Dropdown>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full" v-if="this.$route.name !== 'profile' && !loader">
      <div class="-mb-[53px] text-center">
        <router-link class="main-btn" to="/profile">View Your Library</router-link>
      </div>
    </div>
  </section>
  <Modal v-if="modal.open" @close="closeModal" @delete="deleteGame" :id="modal.id" />
</template>

<script>
import Modal from '@/components/app/ModalAgree.vue'
import Dropdown from 'v-dropdown'
import { mapGetters } from 'vuex'
export default {
  components: { Dropdown, Modal },
  data() {
    return {
      loader: true,
      modal: { open: false, id: 0 },
      user: {
        games: {},
      },
      games: [],
    }
  },
  methods: {
    openModal(id) {
      this.modal.open = true
      this.modal.id = id
    },
    closeModal() {
      this.modal.open = false
      this.modal.id = 0
    },
    getGameById(id) {
      for (let i = 0; i < this.games.length; i++) {
        if (this.games[i].gameID === id) {
          return i
        }
      }
    },
    async downloadGame(id) {
      await this.$store.dispatch('downloadGame', id)
      this.user.games[id].download = true
    },
    async deleteGame(id) {
      await this.$store.dispatch('deleteGame', id)
      this.user.games[id].download = false
      this.closeModal()
    },
  },
  async mounted() {
    this.games = await this.$store.dispatch('fetchGames')
    this.user.games = await this.getUser.games
    this.loader = false
  },
  computed: {
    ...mapGetters(['getUser']),
  },
}
</script>

<style lang="scss">
.v-dropdown-container {
  border-radius: 17px !important;
  padding: 17px 0 0 0 !important;
  background: transparent !important;
  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    outline: none;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    z-index: 2999;
    border-color: transparent transparent #272b2a transparent;
  }
}
</style>
