import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  professionList: []
}

const mutations = {
  [types.getProfession](state, data) {
    state.professionList = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})