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
  artDetails: [],
  artId: '23',

  // home
  moreInfo: []
}

const mutations = {
  // 专业设置
  [types.professionList](state, data) {
    state.specialList = data
  },
  [types.professionDetails](state, data) {
    state.professionDetails = data
  },
  [types.getCurrentID](state, id) {
    state.pageId = id
  },

  // 五年制
  [types.getInfo](state, data) {
    state.info = data
  },
  [types.getArtDetails](state, data) {
    state.artDetails = data
  },
  [types.getArtId](state, id) {
    state.artId = id
  },

  // home
  [types.getMoreInfo](state, data) {
    state.moreInfo = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})