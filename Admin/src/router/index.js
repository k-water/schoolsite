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
    path: '/improvelist',
    name: 'ImproveList',
    component: require('../page/Profession/ImproveList.vue')
  }, {
    path: '/addimprove',
    name: 'AddImprove',
    component: require('../page/Profession/AddImprove.vue')
  }, {
    path: '/infoManage',
    name: 'InfoManage',
    component: require('../page/Info/Info.vue')
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