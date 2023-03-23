<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    MainLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout'
    },
  },
}
</script>
