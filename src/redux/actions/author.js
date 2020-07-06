import http from '../../services/http'
import {REACT_APP_URL} from 'react-native-dotenv';

const getAuthor = (param) =>{
const url = `${REACT_APP_URL}books/author?${param}`
console.log(url)
return {
  type: 'GETAUTHOR',
  payload: http().get(url)
  }
}

const postAuthor = (dataPost) =>{
const url = `${REACT_APP_URL}books/author`
return {
  type: 'POSTAUTHOR',
  payload: http().post(url, dataPost)
  }
}

const patchAuthor = (id, dataBook) =>{
const url = `${REACT_APP_URL}books/author/${id}`
return {
  type: 'PATCHAUTHOR',
  payload: http().patch(url, dataBook)
  }
}

const deleteAuthor = (id) =>{
const url = `${REACT_APP_URL}books/author/${id}`
return {
  type: 'DELETEAUTHOR',
  payload: http().delete(url)
  }
}


export {getAuthor, deleteAuthor, postAuthor, patchAuthor}