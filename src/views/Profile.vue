<template>
  <router-link class="text-primary-200 hover:text-white" to="/login">login</router-link>
  <br />
  <router-link class="text-primary-200 hover:text-white" to="/register">register</router-link>
  <br />
  <button @click.prevent="logOut">logout</button>
  <Library />
</template>

<script>
import Library from '@/components/Library.vue'
export default {
  components: { Library },
  methods: {
    logOut() {
      this.$store.dispatch('logout')
      window.location.reload()
    },
  },
}
</script>
