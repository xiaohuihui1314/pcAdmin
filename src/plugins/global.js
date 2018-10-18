import {httpGet, httpPost, httpPut, httpDelete} from './axios';
export default {
  install (Vue) {
    // 请求方式
    Vue.prototype.$get = httpGet; //get请求
    Vue.prototype.$post = httpPost; //post请求
    Vue.prototype.$put = httpPut; //put请求
    Vue.prototype.$delete = httpDelete; //put请求
   
    // 本地存储
    // localStorage封装
    Vue.prototype.$localStorage = {
      get (item) {
        const key = `admin_${item}`;
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : ''
      },
      set (item, val) {
        const key = `admin_${item}`;
        localStorage.setItem(key, JSON.stringify(val))
      },
      remove (item) {
        const key = `admin_${item}`;
        return localStorage.removeItem(key);
      },
      clear () {
        return localStorage.clear();
      }
    };
  }
}
