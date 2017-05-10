import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  specialList: []
}

const mutations = {
  [types.professionList](state, data) {
    state.specialList = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})