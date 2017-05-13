import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  professionList: [],
  improveList: [],

  editProId: '',
  editProDetails: []
}

const mutations = {
  [types.getProfession](state, data) {
    state.professionList = data
  },
  [types.getImprove](state, data) {
    state.improveList = data
  },

  [types.getEditProId](state, id) {
    state.editProId = id
  },
  [types.getEditProDetails](state, data) {
    state.editProDetails = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})