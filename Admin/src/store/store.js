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
  editProDetails: [],

  editImproveId: '',
  editImproveDetails: []
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
  },

  [types.getEditImproveId](state, id) {
    state.editImproveId = id
  },
  [types.getEditImproveDetails](state, data) {
    state.editImproveDetails = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})