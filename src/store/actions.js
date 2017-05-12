import Vue from 'vue'
import axios from '@/utils/http.js'
import * as types from './mutation-types.js'

// profession
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
    url: '/subjects/' + objID.id,
  }).then((res) => {
    commit(types.professionDetails, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getDetailsID = ({ commit }, id) => {
  commit(types.getCurrentID, id)
}

// college
export const getInfoFive = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.getInfo, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getArtDetails = ({ commit }, objID) => {
  axios({
    method: 'get',
    url: '/informations/' + objID.id
  }).then((res) => {
    commit(types.getArtDetails, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getArtId = ({ commit }, id) => {
  commit(types.getArtId, id)
}

// home
export const getMoreInfo = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.getMoreInfo, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}