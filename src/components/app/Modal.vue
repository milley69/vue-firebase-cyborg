<template>
  <div
    class="setting_bg fixed left-0 right-0 top-0 bottom-0 z-50 h-screen w-full bg-primary-100 bg-opacity-80"
    @click="$emit('close')"
  ></div>
  <div class="setting_modal container absolute left-0 right-0 z-[51] mx-10 -mt-24 rounded-[23px] bg-secondary p-0">
    <div class="overflow-y-hidden p-[24px]">
      <div class="mb-8 flex items-center justify-center gap-3">
        <h1>Are you sure you want to delete this game?</h1>
      </div>
      <div class="mt-2 flex content-end justify-center">
        <div class="main-border-button">
          <button class="mr-2" @click.prevent="$emit('delete', id)">Yes, of course</button>
          <button class="mr-2" @click.prevent="$emit('close')">It was an accident</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  emits: ['close', 'delete'],
}
</script>

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
