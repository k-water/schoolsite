import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
axios.defaults.baseURL = 'http://112.74.93.190:8080'


// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log("错误的传参");
  return Promise.reject(error);
});



// code状态码判断
axios.interceptors.response.use((res) => {
  if (res.data.code === 30006) {
    Vue.prototype.$message.error(res.data.message)
  }
  if (res.data.code === 40000) {
    router.replace({
      path: 'login',
      query: {
        redirect: router.currentRoute.fullPath
      }
    })
  }
  return res;
}, (error) => {
  console.log("网络异常");
  return Promise.reject(error);
});
export default axios;