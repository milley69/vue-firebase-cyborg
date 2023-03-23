<template>
  <div
    class="setting_bg fixed left-0 right-0 top-0 bottom-0 z-50 h-screen w-full bg-primary-100 bg-opacity-80"
    @click="closeModal"
  ></div>
  <div class="setting_modal container fixed left-0 right-0 z-[51] mx-10 rounded-[23px] bg-secondary p-0">
    <div class="overflow-y-hidden p-[24px]">
      <!--  -->

      <div class="flex items-center justify-center gap-3">
        <div v-show="imageSrc" class="my-2 h-64 w-64 object-fill">
          <img class="block max-w-full" alt="qwe" ref="img" :src="imageSrc" />
        </div>
        <div v-show="imageSrc" id="preview" class="my-2 h-[46px] w-[46px] overflow-hidden rounded-full"></div>
      </div>
      <div class="mt-2 flex content-end justify-center">
        <button v-if="!imageSrc" class="btn-border" @click="imageInput.click()">Select Image</button>
        <button v-else class="btn-border" @click="handleImageCropped">Crop Image</button>
        <button class="btn btn-gray mx-2 w-32" @click="fileCleared">Clear</button>
        <input type="file" ref="imageInput" accept=".jpg,.jpeg,.png" @change="fileChanged" class="hidden" />
      </div>
      <div class="my-2 text-center align-baseline">
        <span>Selected File: </span>
        <span v-if="selectedFile">{{ selectedFile.name }}</span>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import { defineComponent, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  name: 'Setting',
  events: ['imageCropped', 'closeModal'],
  setup(_props, { emit }) {
    const imageInput = ref(null)
    const selectedFile = ref(null)
    const imageSrc = ref(null)
    const img = ref(null)
    const fileReader = new FileReader()
    let cropper = null
    fileReader.onload = (event) => {
      imageSrc.value = event.target.result
    }
    const handleImageCropped = () => {
      cropper
        .getCroppedCanvas({
          width: 256,
          height: 256,
        })
        .toBlob((blob) => {
          console.log(blob)
          emit('imageCropped', blob)
        }, 'image/jpeg')
    }
    const closeModal = () => {
      emit('closeModal')
    }
    const fileChanged = (e) => {
      const files = e.target.files || e.dataTransfer.files
      if (files.length) {
        selectedFile.value = files[0]
      }
    }
    const fileCleared = (_) => {
      selectedFile.value = null
    }
    onMounted(() => {
      cropper = new Cropper(img.value, {
        aspectRatio: 1,
        minCropBoxWidth: 256,
        minCropBoxHeight: 256,
        viewMode: 3,
        dragMode: 'move',
        background: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        preview: document.querySelector('#preview'),
      })
    })
    onUnmounted(() => {
      cropper.destroy()
    })
    watchEffect(() => {
      if (selectedFile.value) {
        fileReader.readAsDataURL(selectedFile.value)
      } else {
        imageSrc.value = null
      }
    })
    watch(
      imageSrc,
      () => {
        if (imageSrc.value) {
          cropper.replace(imageSrc.value)
        }
      },
      {
        flush: 'post',
      }
    )
    return {
      imageInput,
      selectedFile,
      fileChanged,
      fileCleared,
      imageSrc,
      img,
      handleImageCropped,
      closeModal,
    }
  },
})
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
