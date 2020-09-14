import axios from 'axios'
import authHeader from "./auth-header";
const noAuthInstance = axios.create();

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const request = (params) => {
  return axios({
    headers: Object.assign(
      {},
      headers,
      params.headers ? authHeader() : {}
    ),
    method: params.method,
    params: params.queryParams,
    url: params.url,
    data: params.data
  })
}

const requestNoAuth = (params) => {
  return noAuthInstance({
    headers: Object.assign(
      {},
      headers,
    ),
    method: params.method,
    params: params.queryParams,
    url: params.url,
    data: params.data
  })
}

delete noAuthInstance.defaults.headers.common['Authorization'];
export const getNoAuth = (params) => requestNoAuth(Object.assign({ method: 'GET', ...params }))
export const postNoAuth = (params) => requestNoAuth(Object.assign({ method: 'POST', ...params }))

export const get = (params) => request(Object.assign({ method: 'GET', ...params }))
export const post = (params) => request(Object.assign({ method: 'POST', ...params }))
export const put = (params) => request(Object.assign({ method: 'PUT', ...params }))
export const del = (params) => request(Object.assign({ method: 'DELETE', ...params }))
export const patch = (params) => request(Object.assign({ method: 'PATCH', ...params }))
