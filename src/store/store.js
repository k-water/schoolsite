import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  specialList: [],
  pageId: '',
  professionDetails: []
}

const mutations = {
  [types.professionList](state, data) {
    state.specialList = data
  },
  [types.professionDetails](state, data) {
    state.professionDetails = data
  },
  [types.getCurrentID](state, id) {
    state.pageId = id
    console.log(state.pageId)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})