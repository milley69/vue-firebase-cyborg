<template>
  <header
    class="absolute left-0 right-0 top-0 z-50 h-20 bg-[#f7f7f7] py-0 px-15px text-center shadow-none transition-all duration-500 ease-in lg:top-4 lg:h-[70px] lg:bg-transparent"
  >
    <div class="container p-0">
      <div class="-mx-3 mt-0 flex flex-wrap">
        <div class="mt-0 w-full max-w-full shrink-0 grow-0 basis-auto pr-3 pl-3">
          <nav
            class="flex min-h-[5rem] overflow-hidden rounded-none bg-transparent px-0 py-15px lg:rounded-[50px]"
            aria-label="nav"
          >
            <router-link
              to="/"
              class="absolute top-15px left-7/5 mr-7/5 basis-1/4 transition-all duration-300 lg:static xl:mr-[5%] xl:border-r xl:border-solid xl:border-secondary"
            >
              <img src="@/images/logo.png" alt="" class="w-[191px]" />
            </router-link>
            <HeaderSearch />
            <ul
              class="z-[999] mt-0 mr-0 hidden basis-[70%] justify-end text-right align-middle transition-all duration-300 lg:inline-flex"
            >
              <li class="inline-block px-[5px] xl:px-[10px]" v-for="(link, index) in links" :key="link.path">
                <router-link
                  :to="link.path"
                  class="block rounded-[18px] border-transparent py-[13px] px-[10px] text-sm capitalize tracking-[.3px] text-gray-66 transition-all duration-300 hover:text-primary-200"
                  >{{ link.title }}</router-link
                >
              </li>

              <li class="inline-block px-[5px] xl:px-[10px]" v-if="login">
                <router-link
                  class="block rounded-[23px] border-transparent border-gray-50 bg-secondary py-2 pr-[10px] pl-5 text-sm capitalize tracking-[.3px] text-gray-66 transition-all duration-300 hover:text-primary-200"
                  to="/profile"
                  >Profile
                  <img
                    src="@/images/profile-header.jpg"
                    alt=""
                    class="ml-[5px] inline w-full max-w-[30px] overflow-hidden rounded-full align-middle"
                /></router-link>
              </li>

              <li class="my-auto inline-block px-[5px] xl:px-[10px]" v-else>
                <router-link
                  class="block rounded-[23px] border-transparent border-gray-50 bg-secondary py-2 px-5 text-sm capitalize tracking-[.3px] text-gray-66 transition-all duration-300 hover:text-primary-200"
                  to="/login"
                  >Login</router-link
                >
              </li>
            </ul>
            <ul
              ref="Navbar"
              class="collapsed relative z-[999] float-none ml-0 !mt-[65px] mr-0 h-auto w-full basis-full text-center transition-all lg:hidden"
            >
              <li
                class="inline-block w-full border-b-[1px] border-[#eee] bg-white"
                v-for="link in links"
                :key="link.path"
                :class="{ 'border-t-[1px]': link.class }"
                @click="closeNavbar"
              >
                <router-link
                  class="block h-[50px] rounded-[18px] border-none bg-white p-0 text-[14px] font-normal capitalize leading-[50px] text-[#1e1e1e]"
                  :to="link.path"
                  >{{ link.title }}</router-link
                >
              </li>

              <li class="inline-block w-full border-b-[1px] border-[#eee] bg-white" @click="closeNavbar" v-if="login">
                <router-link
                  class="block h-[50px] rounded-[18px] border-none bg-white p-0 text-[14px] font-normal capitalize leading-[50px] text-[#1e1e1e]"
                  to="/profile"
                  >Profile</router-link
                >
              </li>
              <li class="inline-block w-full border-b-[1px] border-[#eee] bg-white" @click="closeNavbar" v-else>
                <router-link
                  class="block h-[50px] rounded-[18px] border-none bg-white p-0 text-[14px] font-normal capitalize leading-[50px] text-[#1e1e1e]"
                  to="/login"
                  >Login</router-link
                >
              </li>
            </ul>
            <a class="menu-trigger" @click="openNavbar" :class="{ active: menubar }">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CyborgCollapse from '@/assets/collapse.js'
import HeaderSearch from '@/components/app/HeaderSearch.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {
    HeaderSearch,
  },
  data() {
    return {
      menubar: false,
      login: false,
      links: [
        { title: 'Home', path: '/', class: true },
        { title: 'Browse', path: '/browse' },
        { title: 'Clips', path: '/clips' },
      ],
    }
  },
  computed: { ...mapGetters(['getUser']) },
  mounted() {
    this.getUser.info ? (this.login = true) : (this.login = false)
  },
  methods: {
    openNavbar() {
      this.menubar = !this.menubar
      const collapse = new CyborgCollapse(this.$refs.Navbar, 450)
      collapse.toggle()
    },
    closeNavbar() {
      this.menubar = !this.menubar
      const collapse = new CyborgCollapse(this.$refs.Navbar, 450)
      collapse.toggle()
    },
  },
}
</script>

<style scoped lang="sass">
.router-link-exact-active,
.router-link-active
  color: #e75e8d !important
</style>
