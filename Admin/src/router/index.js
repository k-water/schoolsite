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
      name: 'ProList',
      meta: {
        requireAuth: true
      },
      children: [{
        path: '/',
        name: 'ProList',
        component: require('../page/Profession/ProfessionList.vue'),
        meta: {
          requireAuth: true
        }
      }, {
        path: '/addprofession',
        name: 'AddProfession',
        meta: {
          requireAuth: true
        },
        component: require('../page/Profession/AddProfession.vue')
      }, {
        path: '/editProfession/:id',
        name: 'EditProfession',
        meta: {
          requireAuth: true
        },
        component: require('../page/Profession/EditProfession.vue')
      }, {
        path: '/improvelist',
        name: 'ImproveList',
        meta: {
          requireAuth: true
        },
        component: require('../page/Profession/ImproveList.vue')
      }, {
        path: '/editimprove/:id',
        name: 'EditImprove',
        meta: {
          requireAuth: true
        },
        component: require('../page/Profession/EditImprove.vue')
      }, {
        path: '/addimprove',
        name: 'AddImprove',
        meta: {
          requireAuth: true
        },
        component: require('../page/Profession/AddImprove.vue')
      }, {
        path: '/infoFiveManage',
        name: 'InfoFiveManage',
        meta: {
          requireAuth: true
        },
        component: require('../page/Info/FiveInfo.vue')
      }, {
        path: '/addInfoFive',
        name: 'AddInfoFive',
        meta: {
          requireAuth: true
        },
        component: require('../page/Info/AddFiveInfo.vue')
      }, {
        path: '/infoJobManage',
        name: 'InfoJobManage',
        meta: {
          requireAuth: true
        },
        component: require('../page/Info/JobInfo.vue')
      }, {
        path: '/addJobInfo',
        name: 'AddJobInfo',
        meta: {
          requireAuth: true
        },
        component: require('../page/Info/AddJobInfo.vue')
      }, {
        path: '/editJobInfo/:id',
        name: 'EditJobInfo',
        meta: {
          requireAuth: true
        },
        component: require('../page/Info/EditJobInfo.vue')
      }, {
        path: '/editInfoFive/:id',
        name: 'EditInfoFive',
        meta: {
          requireAuth: true
        },
        component: require('../page/Info/EditFiveInfo.vue')
      }, {
        path: '/entryManage',
        name: 'EntryManage',
        meta: {
          requireAuth: true
        },
        component: require('../page/Entry/Entry.vue')
      }, {
        path: '/entryManageDetails/:id',
        name: 'EntryManageDetails',
        meta: {
          requireAuth: true
        },
        component: require('../page/Entry/EntryDetails.vue')
      }, {
        path: '/messageManage',
        name: 'MessageManage',
        meta: {
          requireAuth: true
        },
        component: require('../page/Message/Message.vue')
      }],
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  console.log(token)
  if (to.meta.requireAuth) {
    if (token) {
      return next()
    } else {
      return next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    return next()
  }
})

export default router