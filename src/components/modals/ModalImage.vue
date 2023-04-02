<template>
  <div
    class="setting_bg fixed left-0 right-0 top-0 bottom-0 z-50 h-screen w-full bg-primary-100 bg-opacity-80"
    @click="$emit('close')"
  ></div>
  <div class="setting_modal container absolute left-0 right-0 z-[51] mx-10 -mt-24 rounded-[23px] bg-secondary p-0">
    <div class="overflow-y-hidden p-[24px]">
      <img :src="image" :alt="title" />
      <!-- {{ image }} -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title'],
  emits: ['close'],
}
</script>
