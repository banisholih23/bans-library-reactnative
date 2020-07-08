import http from '../../services/http'
const ip = 'http://192.168.1.16:5000/'

const getGenre = (param) =>{
const url = `${ip}books/genres?${param}`
console.log(url)
return {
  type: 'GETGENRE',
  payload: http().get(url)
  }
}

const postGenre = (dataPost) =>{
const url = `${ip}books/genres`
return {
  type: 'POSTGENRE',
  payload: http().post(url, dataPost)
  }
}

const patchGenre = (id, dataBook) =>{
const url = `${ip}books/genres/${id}`
return {
  type: 'PATCHGENRE',
  payload: http().patch(url, dataBook)
  }
}

const deleteGenre = (id) =>{
const url = `${ip}books/genres/${id}`
return {
  type: 'DELETEGENRE',
  payload: http().delete(url)
  }
}


export {getGenre, deleteGenre, postGenre, patchGenre}