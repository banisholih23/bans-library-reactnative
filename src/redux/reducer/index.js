import {combineReducers} from 'redux'
import bookReducers from './book'
import authorReducers from './author'
import userReducers from './users'
import genreReducers from './genre'

const reducer = combineReducers({
  book: bookReducers,
  author: authorReducers,
  user: userReducers,
  genre: genreReducers,
})

export default reducer