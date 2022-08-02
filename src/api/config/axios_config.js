import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: (url, params = {}) => {
      return axios.get(url, params)
    },
    post: (url, params = {}) => {
      return axios.post(url, params)
    },
    delete: (url, params = {}) => {
      return axios.delete(url, params)
    },
    patch: (url, params = {}) => {
      return axios.patch(url, params)
    },
    put: (url, params = {}) => {
        return axios.put(url, params)
      },
  }; 