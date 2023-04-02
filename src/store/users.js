import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { child, get, ref as refDb, set, update } from 'firebase/database'
import { getDownloadURL, ref as refSt, uploadBytes } from 'firebase/storage'
import { auth, database, storage } from '../main'

export default {
  state: {
    user: {
      info: {},
      games: {},
      clips: [],
    },
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData
    },
    clearUser(state) {
      state.user = {
        info: {},
        games: {},
        clips: [],
      }
    },
  },
  getters: {
    getUser: (state) => state.user,
    username: (state) => state.user.info.username,
    getUsersGames: (state) => state.user.games,
  },
  actions: {
    async getUserFromDB({ commit, getters }, id) {
      try {
        const userFromDB = (await get(child(refDb(database), 'users/'))).val() || {}
        const userArray = Object.values(userFromDB)
        return userArray.find((user) => user.info.username === id)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async fetchUser({ commit, dispatch }) {
      try {
        commit('clearUser')
        const uid = await dispatch('getUid')
        const user = (await get(child(refDb(database), `users/${uid}`))).val() || {}
        const userData = {
          info: user.info || {},
          games: user.games || {},
          clips: user.clips || [],
        }
        commit('setUser', userData)
      } catch (error) {}
    },
    async Login({ dispatch }, { email, password, rememberMe }) {
      try {
        if (rememberMe) {
          setPersistence(auth, browserLocalPersistence).then(() => signInWithEmailAndPassword(auth, email, password))
        } else {
          setPersistence(auth, browserSessionPersistence).then(() => signInWithEmailAndPassword(auth, email, password))
        }
        await dispatch('fetchUser')
        return true
        // window.open('http://localhost:4000/', '_self')
      } catch (error) {
        console.log(error.toString())
      }
    },
    async Register({ dispatch }, { email, username, password }) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        const uid = await dispatch('getUid')
        if (uid) {
          await set(refDb(database, `/users/${uid}/info`), {
            username,
            about: '',
            avatar:
              'https://firebasestorage.googleapis.com/v0/b/cyborg-milley.appspot.com/o/cyborg_pre.png?alt=media&token=62f35514-984d-4537-887e-1e7a8adb5a2b',
          })
        }
      } catch (error) {
        console.log(error.toString())
      }
    },
    async updateUserInfo({ dispatch, state }, userData) {
      try {
        const uid = await dispatch('getUid')
        if (!uid) return 'smth wrong with uid'

        const userInfo = state.user.info
        const updateData = {}

        if (userData.avatar) {
          const storageReference = refSt(storage, `/Users/${uid}/avatar`)
          await uploadBytes(storageReference, userData.avatar)
          const linkToAvatar = await getDownloadURL(storageReference)
          updateData['avatar'] = linkToAvatar
        }

        updateData['username'] = userData.username !== userInfo.username ? userData.username : userInfo.username
        updateData['about'] = userData.about !== userInfo.about ? userData.about : userInfo.about

        await update(child(refDb(database), `/users/${uid}/info`), updateData)
        await dispatch('fetchUser')
        return true
      } catch (error) {
        console.log(error)
        return error.message
      }
    },

    getUid() {
      const user = auth.currentUser
      return user ? user.uid : null
    },
    async logout({ commit }) {
      await signOut(auth)
      commit('clearUser')
    },
  },
}
