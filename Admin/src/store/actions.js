import Vue from 'vue'
import axios from '@/utils/http.js'
import * as types from './mutation-types.js'

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