import { child, get, ref as refdb, set, update } from 'firebase/database'
import { database } from '../main'

export default {
  state: {
    games: [],
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },
  },
  getters: {
    games: (state) => state.games,
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        const gamesFromDB = (await get(child(refdb(database), 'games/'))).val() || []
        gamesFromDB.sort((a, b) => b.downloaded - a.downloaded)
        commit('setGames', gamesFromDB)
        return gamesFromDB
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async fetchGameByID({ commit, getters }, id) {
      try {
        const gamesFromDB = (await get(child(refdb(database), 'games/'))).val() || []
        return gamesFromDB.find((game) => game.gameID === +id)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async getGame({ commit, dispatch }, { gameID, dateAdded, download }) {
      try {
        const uid = await dispatch('getUid')
        if (!uid) return
        return await set(refdb(database, `/users/${uid}/games/${gameID}`), {
          gameID,
          dateAdded,
          download,
          hoursPlayed: Math.floor(Number(new Date()) / 4000 / (Math.random() * (Math.random() * 5000))),
        })
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async downloadGame({ commit, dispatch }, id) {
      try {
        const uid = await dispatch('getUid')
        if (!uid) return
        const progress = await update(child(refdb(database), `users/${uid}/games/${id}`), { download: true })
        return progress
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async deleteGame({ commit, dispatch }, id) {
      try {
        const uid = await dispatch('getUid')
        if (!uid) return
        const progress = await update(child(refdb(database), `users/${uid}/games/${id}`), { download: false })
        return progress
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
}
