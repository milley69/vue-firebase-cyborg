<template>
  <div
    class="flex min-h-[18rem] w-72 flex-col items-center justify-between gap-[5px] rounded-[10px] bg-primary-100 bg-opacity-[0.041] p-[10px] shadow-[4px_4px_30px__rgba(0,0,0,0.2)]"
  >
    <label
      for="preview"
      v-if="!imgSrc"
      class="flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-white"
    >
      <i class="bx bx-cloud-download bx-md text-primary-200"></i>
      <p class="text-center text-white">Browse Preview to upload!</p>
    </label>
    <!--  -->
    <div
      v-else-if="!clip.preview.base"
      class="flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-[10px]"
    >
      <div class="h-[250px] w-[250px] object-fill">
        <vue-cropper
          ref="cropper"
          :aspectRatio="1"
          :minCropBoxWidth="250"
          :minCropBoxHeight="250"
          :minContainerWidth="250"
          :minContainerHeight="250"
          :viewMode="3"
          :dragMode="'move'"
          :background="false"
          :cropBoxMovable="false"
          :cropBoxResizable="false"
          :src="imgSrc"
          alt="Source Image"
        />
      </div>
    </div>
    <div
      class="flex w-full flex-1 cursor-pointer flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-primary-200"
      v-else-if="clip.preview.base"
    >
      <img :src="clip.preview.base" class="rounded-xl" alt="" />
    </div>
    <!--  -->
    <div class="flex h-10 w-full items-center justify-end rounded-[10px] p-2">
      <i
        v-if="imgSrc && !clip.preview.base"
        @click="cropImage"
        class="bx bx-check tr-300 cursor-pointer rounded-full bg-primary-100 p-2 text-primary-200 hover:bg-white"
      ></i>
      <i
        v-else-if="!imgSrc && !clip.preview.base"
        @click="this.$refs.preview.click()"
        class="bx bxs-file-image tr-300 cursor-pointer rounded-full bg-primary-100 p-2 text-primary-200 hover:bg-white"
      ></i>
      <i v-else class="bx bxs-happy-beaming tr-300 rounded-full bg-primary-100 p-2 text-primary-200 hover:bg-white"></i>
      <p class="flex-1 text-center text-white" v-if="clip.preview.file">{{ clip.preview.file.name }}</p>
      <p class="flex-1 text-center text-white" v-else>Not selected file</p>
      <i
        @click="remove"
        class="bx bx-trash-alt tr-300 cursor-pointer rounded-full bg-primary-100 p-2 text-primary-200 hover:bg-white"
      ></i>
    </div>
    <input id="preview" ref="preview" type="file" class="hidden" accept="image/*" @change="previewChanged" />
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
export default {
  components: { VueCropper },
  emits: ['file'],
  data() {
    return {
      clip: {
        preview: { file: '', base: '' },
      },
      imgSrc: '',
    }
  },
  methods: {
    remove(fullRemove = true) {
      this.$refs.preview.value = ''
      if (fullRemove) {
        this.imgSrc = ''
        this.clip.preview = { file: '', base: '' }
        this.$emit('file', this.clip.preview)
      }
    },
    cropImage() {
      this.clip.preview.base = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$emit('file', this.clip.preview)
      this.remove(false)
    },
    previewChanged(e) {
      const file = e.target.files[0]

      if (file.type.indexOf('image/') === -1) {
        this.$ToastEr(`Please select an image file`, '#ec6090')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgSrc = event.target.result
          // this.$refs.cropper.replace(event.target.result)
        }
        this.clip.preview.file = file
        reader.readAsDataURL(file)
      } else {
        this.$ToastEr(`FileReader API not supported`, '#ec6090')
      }
    },
  },
}
//
</script>

<style lang="scss">
.cropper-view-box {
  border-radius: 10px;
  outline: 2px dotted;
  outline-color: rgb(231 94 141);
}
</style>
