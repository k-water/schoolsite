import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/home.vue'
import Profession from '../page/Profession/Profession.vue'
import College from '../page/College/College.vue'
import Education from '../page/Education/Education.vue'
import Cooperation from '../page/Cooperation/Cooperation.vue'
import Apply from '../page/Apply/Apply.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/profession',
    name: 'Profession',
    component: Profession
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
  }]
})