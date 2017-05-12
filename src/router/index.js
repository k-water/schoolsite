import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/home.vue'
import Profession from '@/page/Profession/Profession.vue'
import College from '@/page/College/College.vue'
import Education from '@/page/Education/Education.vue'
import Cooperation from '@/page/Cooperation/Cooperation.vue'
import Apply from '@/page/Apply/Apply.vue'
import Art from '@/page/College/Art.vue'
import Details from '@/page/Profession/Details.vue'
import JobInfos from '@/page/College/Job.vue'
import Improve from '@/page/Education/Improve.vue'
Vue.use(Router)

// hash 模式路由
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/profession',
    name: 'Profession',
    component: Profession,
    // children: [{
    //   path: 'details/:id',
    //   name: 'Details',
    //   component: Datails
    // }]
  }, {
    path: '/profession/details/:id',
    name: 'Details',
    component: Details
  }, {
    path: '/college',
    name: 'College',
    component: College
  }, {
    path: '/education',
    name: 'Education',
    component: Education
  }, {
    path: '/education/improve/:id',
    name: 'Improve',
    component: Improve,
    meta: {
      scrollToTop: true
    }
  }, {
    path: '/cooperation',
    name: 'Cooperation',
    component: Cooperation
  }, {
    path: '/apply',
    name: 'Apply',
    component: Apply
  }, {
    path: '/college/article/:id',
    name: 'Article',
    component: Art,
    meta: {
      scrollToTop: true
    }
  }, {
    path: '/college/jobInfo/:id',
    name: 'Jobinfos',
    component: JobInfos,
    meta: {
      scrollToTop: true
    }
  }, {
    path: '*',
    redirect: '/'
  }],
  scrollBehavior
})

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default router