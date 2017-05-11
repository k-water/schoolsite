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
  }).then((res) => {
    commit(types.professionList, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getProfessionDetails = ({ commit }) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      size: 999
    }
  }).then((res) => {
    commit(types.professionList, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getDetails = ({ commit }, objID) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      id: objID.id
    }
  }).then((res) => {
    commit(types.professionDetails, res.data.data.content)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getDetailsID = ({ commit }, id) => {
  commit(types.getCurrentID, id)
}