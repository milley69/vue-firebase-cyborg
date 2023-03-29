import Vuex from 'vuex'
import clips from './clips'
import games from './games'
import users from './users'

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: { games, users, clips },
})
