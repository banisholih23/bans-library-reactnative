import {combineReducers} from 'redux'
import bookReducers from './book'
import authorReducers from './author'
import userReducers from './users'
import genreReducers from './genre'
import transactionsReducers from './transactions'
import authReducers from './auth'

const reducer = combineReducers({
  book: bookReducers,
  author: authorReducers,
  user: userReducers,
  genre: genreReducers,
  transactions: transactionsReducers,
  auth: authReducers
})

export default reducer