import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Profession',
    component: require('../page/Profession/Profession.vue')
  }, {
    path: '/improve',
    name: 'Improve',
    component: require('../page/Profession/Improve.vue')
  }, {
    path: '/professlist',
    name: 'ProList',
    component: require('../page/Profession/ProfessionList.vue')
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