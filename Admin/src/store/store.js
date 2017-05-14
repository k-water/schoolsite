import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // 专业管理
  professionList: [],
  improveList: [],

  editProId: '',
  editProDetails: [],

  editImproveId: '',
  editImproveDetails: [],

  // 信息管理
  infoFive: [],
  editInfoFiveId: '',
  editInfoFiveDetails: [],

  jobInfo: [],
  jobInfoId: '',
  jobInfoDetails: [],

  // 报名管理
  entryInfo: [],
  entryInfoId: '',
  entryInfoDetails: []
}

const mutations = {
  // 专业管理
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
  },

  // 信息管理
  [types.getInfoFive](state, data) {
    state.infoFive = data
  },
  [types.getEditInfoFiveId](state, id) {
    state.editInfoFiveId = id
  },
  [types.getEditInfoFiveDetails](state, data) {
    state.editInfoFiveDetails = data
  },

  [types.getJobInfo](state, data) {
    state.jobInfo = data
  },
  [types.getJobInfoId](state, id) {
    state.jobInfoId = id
  },
  [types.getJobInfoDetails](state, data) {
    state.jobInfoDetails = data
  },

  // 报名管理
  [types.getEntryInfo](state, data) {
    state.entryInfo = data
  },
  [types.getEntryInfoId](state, id) {
    state.entryInfoId = id
  },
  [types.getEntryInfoDetails](state, data) {
    state.entryInfoDetails = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})