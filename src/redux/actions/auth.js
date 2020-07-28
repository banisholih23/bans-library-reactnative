import http from '../../services/http'
const ip = 'http://192.168.1.14:5000/'
import {API} from 'react-native-dotenv'
import qs from 'querystring'

const register = (username, email, password) => {
  return {
    type: 'LOGOUT',
    payload: http().post(`${API}books/auth/register`, qs.stringify({username, email, password}))
  }
}

const loginUser = (dataSubmit) => {
  return {
    type: 'LOGIN',
    payload: http().post(`${API}books/auth/login`, dataSubmit)
  }
}

const logout = () => {
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export {register, loginUser, logout}