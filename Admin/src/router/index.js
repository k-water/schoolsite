import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'ProList',
    component: require('../page/Profession/ProfessionList.vue')
  }, {
    path: '/addprofession',
    name: 'AddProfession',
    component: require('../page/Profession/AddProfession.vue')
  }, {
    path: '/editProfession/:id',
    name: 'EditProfession',
    component: require('../page/Profession/EditProfession.vue')
  }, {
    path: '/improvelist',
    name: 'ImproveList',
    component: require('../page/Profession/ImproveList.vue')
  }, {
    path: '/editimprove/:id',
    name: 'EditImprove',
    component: require('../page/Profession/EditImprove.vue')
  }, {
    path: '/addimprove',
    name: 'AddImprove',
    component: require('../page/Profession/AddImprove.vue')
  }, {
    path: '/infoFiveManage',
    name: 'InfoFiveManage',
    component: require('../page/Info/FiveInfo.vue')
  }, {
    path: '/addInfoFive',
    name: 'AddInfoFive',
    component: require('../page/Info/AddFiveInfo.vue')
  }, {
    path: '/infoJobManage',
    name: 'InfoJobManage',
    component: require('../page/Info/JobInfo.vue')
  }, {
    path: '/addJobInfo',
    name: 'AddJobInfo',
    component: require('../page/Info/AddJobInfo.vue')
  }, {
    path: '/editJobInfo/:id',
    name: 'EditJobInfo',
    component: require('../page/Info/EditJobInfo.vue')
  }, {
    path: '/editInfoFive/:id',
    name: 'EditInfoFive',
    component: require('../page/Info/EditFiveInfo.vue')
  }, {
    path: '/entryManage',
    name: 'EntryManage',
    component: require('../page/Entry/Entrt.vue')
  }, {
    path: '/messageManage',
    name: 'MessageManage',
    component: require('../page/Message/Message.vue')
  }]
})

export default router