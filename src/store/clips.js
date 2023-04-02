import { ref as refdb, set } from 'firebase/database'
import { getDownloadURL, ref as refSt, uploadBytes } from 'firebase/storage'
import { database, storage } from '../main'

export default {
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async uploadClips({ dispatch, commit }, clipData) {
      try {
        if (!(!!clipData.title && !!clipData.preview.file && !!clipData.preview.base && !!clipData.video)) {
          return 'Invalid'
        }
        const uid = await dispatch('getUid')
        if (!uid) return

        const uniqueID = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
        const id = uniqueID()

        const storageRefPreview = refSt(storage, `Clips/${uid}/${id}`)
        const storageRefVideo = refSt(storage, `Clips/${uid}/${id}.mp4`)

        await uploadBytes(storageRefPreview, clipData.preview.file)
        await uploadBytes(storageRefVideo, clipData.video)

        const linkToPreview = await getDownloadURL(storageRefPreview)
        const linkToVideo = await getDownloadURL(storageRefVideo)

        await set(refdb(database, `/users/${uid}/clips/${clipData.lengthClips}`), {
          title: clipData.title,
          poster: linkToPreview,
          video: linkToVideo,
          views: Math.floor((Date.now() % 50) * 9),
        })
        await dispatch('fetchUser')
        return true
      } catch (error) {
        console.log(error)
        return error.message
      }
    },
  },
}
