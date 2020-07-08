import http from '../../services/http'
const ip = 'http://192.168.1.16:5000/'

const getAuthor = (param) =>{
const url = `${ip}books/author?${param}`
console.log(url)
return {
  type: 'GETAUTHOR',
  payload: http().get(url)
  }
}

const postAuthor = (dataPost) =>{
const url = `${ip}books/author`
return {
  type: 'POSTAUTHOR',
  payload: http().post(url, dataPost)
  }
}

const patchAuthor = (id, dataBook) =>{
const url = `${ip}books/author/${id}`
return {
  type: 'PATCHAUTHOR',
  payload: http().patch(url, dataBook)
  }
}

const deleteAuthor = (id) =>{
const url = `${ip}books/author/${id}`
return {
  type: 'DELETEAUTHOR',
  payload: http().delete(url)
  }
}


export {getAuthor, deleteAuthor, postAuthor, patchAuthor}