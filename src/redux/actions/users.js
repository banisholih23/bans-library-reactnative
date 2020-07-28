import http from '../../services/http'
const ip = 'http://192.168.1.16:5000/'
import {API} from 'react-native-dotenv'

const getUser = (param) => {
  const url = `${API}books/auth/users?${param}`
  console.log(url)
  return {
    type: 'GETUSER',
    payload: http().get(url)
  }
}
const patchUser = (id, dataUser) =>{
  const url = `${API}books/auth/users/${id}`
  return {
    type: 'PATCHUSER',
    payload: http().patch(url, dataUser)
  }
}

const deleteUser = (id) => {
  const url = `${API}books/auth/users/${id}`
  console.log(url)
  return {
    type: 'DELETEUSER',
    payload: http().delete(url)
  }
}

export {getUser, deleteUser, patchUser}