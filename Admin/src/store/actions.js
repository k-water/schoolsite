import Vue from 'vue'
import axios from '@/utils/http.js'
import * as types from './mutation-types.js'

// 专业管理
export const getProfessionList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then(res => {
    commit(types.getProfession, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

export const getImproveList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then(res => {
    commit(types.getImprove, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}


export const getEditProId = ({ commit }, id) => {
  commit(types.getEditProId, id)
}

export const getEditProDetails = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/subjects/' + params.id
  }).then(res => {
    commit(types.getEditProDetails, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

export const getEditImproveId = ({ commit }, id) => {
  commit(types.getEditImproveId, id)
}

export const getEditImproveDetails = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/subjects/' + params.id
  }).then(res => {
    commit(types.getEditImproveDetails, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

// 信息管理
export const getInfoFiveList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then(res => {
    commit(types.getInfoFive, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

export const getEditInfoFiveId = ({ commit }, id) => {
  commit(types.getEditInfoFiveId, id)
}

export const getEditInfoFiveDetails = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations/' + params.id
  }).then(res => {
    commit(types.getEditInfoFiveDetails, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

export const getJobInfoList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then(res => {
    commit(types.getJobInfo, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

export const getJobInfoId = ({ commit }, id) => {
  commit(types.getJobInfoId, id)
}

export const getJobInfoDetails = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations/' + params.id
  }).then(res => {
    commit(types.getJobInfoDetails, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}

// 报名管理
export const getEntryInfoList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/entryForms',
    params: {
      page: params.page,
      size: params.size
    }
  }).then(res => {
    commit(types.getEntryInfo, res.data.data)
  }).catch(err => {
    return console.log(err)
  })
}