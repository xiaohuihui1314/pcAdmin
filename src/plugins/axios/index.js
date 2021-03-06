import axios from 'axios';
import Vue from 'vue';
import config from '../../config/service'
axios.defaults.withCredentials=true;
export const httpGet = (url, params, headers = {}) => {
  return axios({
    url: url,
    params: params,
    method: 'get',
    headers: {
      token: Vue.prototype.$localStorage.get('token').token,
      ...headers
    },
  })
};
export const httpPut = (url, params, headers = {}) => {
  return axios({
    url: url,
    method: 'put',
    params: params,
    headers: {
      token: Vue.prototype.$localStorage.get('token').token,
      ...headers
    },
    transformRequest: [(data) => {
      return JSON.stringify(data);
    }]
  })
};
export const httpDelete = (url, params, headers = {}) => {
  return axios({
    url: url,
    method: 'delete',
    params: params,
    headers: {
      token: Vue.prototype.$localStorage.get('token').token,
      ...headers
    },
    transformRequest: [(data) => {
      return JSON.stringify(data);
    }]
  })
};
export const httpPost = (url, params, headers = {}, doTransformRequest = true) => {
  return axios({
    url: url,
    method: 'post',
    data: params,
    headers: {
      token: Vue.prototype.$localStorage.get('token').token || '',
      ...headers
    },
    transformRequest: [(data) => {
      return doTransformRequest ? JSON.stringify(data) : data;
    }]
  })
};
// axios 全局配置
axios.defaults.baseURL = config.HOST + config.PATH;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Credentials'] = true;
axios.defaults.timeout = 60000;
axios.defaults.crossDomain = true;
axios.defaults.withCredentials=true;
axios.interceptors.response.use((response) => {
  console.log(document.cookie)
  console.log(response.headers['set-cookie'])
  if (!response || response.status !== 200) return Vue.$toast('网络错误');
  if (response.data.code == 401) router.push({ name: 'Login' }) //token失效
  return response.data;
}, (error) => {
  const isTimeout = error.toString().indexOf('timeout') > -1;
  if (isTimeout) {
    alert('请求超时');
  }
  return error
});
