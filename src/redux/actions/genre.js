import http from '../../services/http'
import {REACT_APP_URL} from 'react-native-dotenv';

const getGenre = (param) =>{
const url = `${REACT_APP_URL}books/genres?${param}`
console.log(url)
return {
  type: 'GETGENRE',
  payload: http().get(url)
  }
}

const postGenre = (dataPost) =>{
const url = `${REACT_APP_URL}books/genres`
return {
  type: 'POSTGENRE',
  payload: http().post(url, dataPost)
  }
}

const patchGenre = (id, dataBook) =>{
const url = `${REACT_APP_URL}books/genres/${id}`
return {
  type: 'PATCHGENRE',
  payload: http().patch(url, dataBook)
  }
}

const deleteGenre = (id) =>{
const url = `${REACT_APP_URL}books/genres/${id}`
return {
  type: 'DELETEGENRE',
  payload: http().delete(url)
  }
}


export {getGenre, deleteGenre, postGenre, patchGenre}