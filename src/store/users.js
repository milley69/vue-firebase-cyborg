import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { child, get, ref as refdb, set } from 'firebase/database'
import { auth, database } from '../main'

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
  },
  actions: {
    async fetchUser({ commit, dispatch }) {
      try {
        commit('clearUser')
        const uid = await dispatch('getUid')
        const user = (await get(child(refdb(database), `users/${uid}`))).val() || {}
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
          await set(refdb(database, `/users/${uid}/info`), { username })
        }
      } catch (error) {
        console.log(error.toString())
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
