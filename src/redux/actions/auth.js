import http from '../../services/http'
const ip = 'http://192.168.1.16:5000/'
import qs from 'querystring'

const register = (username, email, password)=>{
  return {
    type: 'LOGOUT',
    payload: http().post(`${ip}books/auth/register`, qs.stringify({username, email, password}))
  }
}

const loginUser = (dataSubmit)=>{
  return {
    type: 'LOGIN',
    payload: http().post(`${ip}books/auth/login`, dataSubmit)
  }
}

const logout = ()=>{
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export {register, loginUser, logout}