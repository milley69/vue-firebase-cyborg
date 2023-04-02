<template>
  <div
    class="setting_bg fixed left-0 right-0 top-0 bottom-0 z-50 h-screen w-full bg-primary-100 bg-opacity-80"
    @click="$emit('closeSetting')"
  ></div>
  <div class="setting_modal container fixed left-0 right-0 top-0 z-[51] mt-8 rounded-23px bg-secondary">
    <section v-if="loader" class="flex flex-col gap-8 py-9">
      <loader />
      <h1 class="loader-text text-center text-lg font-bold">
        Please do not reload the page until the upload is completed
      </h1>
    </section>
    <div v-show="!loader" class="overflow-y-hidden p-[24px]">
      <div class="flex items-center justify-center gap-3">
        <form class="mt-5" @submit.prevent="updateUserInfo">
          <div class="relative">
            <input
              v-model="newUser.username"
              id="usernameSettings"
              required=""
              type="text"
              maxlength="15"
              name="text"
              autocomplete="off"
              class="w-full rounded-2xl border-[1.5px] border-gray-66 bg-transparent p-4 text-white transition-all valid:border-primary-200 valid:outline-0 focus:border-primary-200 focus:outline-0"
            />
            <label
              for="usernameSettings"
              class="pointer-events-none absolute left-15px translate-y-4 text-[#e8e8e8] transition-all"
              >Username</label
            >
          </div>
          <div class="relative mt-8">
            <textarea
              v-model="newUser.about"
              id="usernameSettings"
              required=""
              type="text"
              maxlength="50"
              name="about"
              rows="4"
              autocomplete="off"
              class="w-full resize-none rounded-2xl border-[1.5px] border-gray-66 bg-transparent p-4 text-white transition-all valid:border-primary-200 valid:outline-0 focus:border-primary-200 focus:outline-0"
            ></textarea>
            <label
              for="usernameSettings"
              class="pointer-events-none absolute left-15px translate-y-4 text-[#e8e8e8] transition-all"
              >About you</label
            >
          </div>
          <div class="mt-8">
            <SettingAvatar @file="avatarReady" ref="avatar" :key="loader" />
          </div>
          <div class="main-border-button mt-8 text-center">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SettingAvatar from '../SettingAvatar.vue'
export default {
  name: 'Setting',
  components: { SettingAvatar },
  emits: ['closeSetting'],
  props: ['user'],
  data() {
    return {
      newUser: {
        username: this.user.username,
        about: this.user.about,
        avatar: null,
      },
      loader: false,
    }
  },
  methods: {
    async updateUserInfo() {
      if (this.newUser.username.length < 3) {
        this.$ToastEr('The minimum value of the name is 3 characters', '#ec6090')
        return
      }
      const userData = {
        username: this.newUser.username,
        about: this.newUser.about,
        avatar: this.newUser.avatar,
      }
      this.loader = true
      const ready = await this.$store.dispatch('updateUserInfo', userData)
      if (ready !== true) {
        this.$ToastEr(ready, '#ec6090')
        this.loader = false
        return
      }
      this.$Toast(`Your account has been successfully updated`)
      this.$emit('closeSetting')
    },
    avatarReady(data) {
      this.newUser.avatar = data
    },
  },
}
</script>

<style scoped lang="scss">
#usernameSettings:focus ~ label,
#usernameSettings:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: rgb(39 41 42);
  padding: 0 0.2em;
  color: rgb(231 94 141);
}

.loader-text:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;
  font-size: 1.5rem;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.4em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: white;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
  }
}

//
</style>
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
