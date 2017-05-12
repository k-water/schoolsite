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
Vue.use(Router)

// hash 模式路由
export default new Router({
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
    component: Art
  }, {
    path: '/college/jobInfo/:id',
    name: 'Jobinfos',
    component: JobInfos
  }, {
    path: '*',
    redirect: '/'
  }]
})