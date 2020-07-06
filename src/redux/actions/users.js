import http from '../../services/http'
import {REACT_APP_URL} from 'react-native-dotenv';

const getUser = (param) => {
  const url = `${REACT_APP_URL}books/auth/users?${param}`
  console.log(url)
  return {
    type: 'GETUSER',
    payload: http().get(url)
  }
}

const deleteUser = (id) => {
  const url = `${REACT_APP_URL}books/auth/users/${id}`
  console.log(url)
  return {
    type: 'DELETEUSER',
    payload: http().delete(url)
  }
}

export {getUser, deleteUser}