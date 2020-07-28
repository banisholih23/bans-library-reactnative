import http from '../../services/http'
import {API} from 'react-native-dotenv';
const ip = 'http://192.168.1.16:5000/'

const getBook = (param) =>{
const url = `${API}books?${param}`;
console.log(url)
return {
  type: 'GETBOOK',
  payload: http().get(url)
  }
}

const getBookById = (id) =>{
  const url = `${API}books/detail/${id}`
  return {
    type: 'GETBOOKID',
    payload: http().get(url)
    }
  }

export {getBook, getBookById}