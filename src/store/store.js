import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // 专业设置
  specialList: [],

  // 页面刷新默认值
  pageId: '34',
  professionDetails: [],

  // 五年制大专
  info: [],
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
  },

  [types.getInfo](state, data) {
    state.info = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})