import axios from 'axios';
import Vue from 'vue';
import config from '../../config/service'

export const httpGet = (url, headers = {}) => {
  return axios({
    url: url,
    method: 'get',
    headers: {
      token: Vue.prototype.$session.get('token').token,
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
      token: Vue.prototype.$session.get('token').token,
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
      token: Vue.prototype.$session.get('token').token,
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
      token: Vue.prototype.$session.get('token').token || '',
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
axios.defaults.timeout = 60000;
axios.interceptors.response.use((response) => {
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
