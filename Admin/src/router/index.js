import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [{
      path: '/login',
      name: 'Login',
      component: require('../page/Login/Login.vue')
    }, {
      path: '/changePassword',
      name: 'ChangePassword',
      component: require('../page/Login/ChangePassword.vue')
    }, {
      path: '/',
      component: require('../components/Home.vue'),
      meta: {
        requireAuth: true
      },
      children: [{
        path: '/',
        name: 'ProList',
        component: require('../page/Profession/ProfessionList.vue'),
        meta: {
          requireAuth: true
        },
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
        component: require('../page/Entry/Entry.vue')
      }, {
        path: '/entryManageDetails/:id',
        name: 'EntryManageDetails',
        component: require('../page/Entry/EntryDetails.vue')
      }, {
        path: '/messageManage',
        name: 'MessageManage',
        component: require('../page/Message/Message.vue')
      }],
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router