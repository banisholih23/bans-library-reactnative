import http from '../../services/http'
import {REACT_APP_URL} from 'react-native-dotenv';

const getBook = (param) =>{
const url = `http://192.168.1.16:5000/books?${param}`;
console.log(url)
return {
  type: 'GETBOOK',
  payload: http().get(url)
  }
}

export {getBook}