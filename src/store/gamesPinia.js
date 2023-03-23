import { child, get, ref as refdb } from 'firebase/database'
import { getDownloadURL, ref as refst } from 'firebase/storage'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { database, storage } from '../main'

export const useGamesStore = defineStore('gamesStore', () => {
  const games = ref([])

  const makeFullUrlImg = (gamesFromDB) => {
    gamesFromDB.forEach(async (game) => {
      await getDownloadURL(refst(storage, game.images.imgMin)).then((url) => {
        game.images.imgMin = url
      })
      await getDownloadURL(refst(storage, game.images.imgBig)).then((url) => {
        game.images.imgBig = url
      })
    })
  }
  const sortGames = (gamesFromDB) => gamesFromDB.sort((a, b) => b.downloaded - a.downloaded)

  const fetchGames = async () => {
    try {
      const gamesFromDB = (await get(child(refdb(database), 'games/'))).val() || []
      makeFullUrlImg(gamesFromDB)
      sortGames(gamesFromDB)
      const gamesID = gamesFromDB
      // const gamesID = gamesFromDB.reduce((obj, game) => {
      //   obj[game.gameID] = game
      //   return obj
      // }, {})
      games.value = gamesID
      console.log('gamesID: ', gamesID)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  fetchGames()

  return { games }
})
