import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from '@react-native-community/async-storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import bookReducers from './book'
import authorReducers from './author'
import userReducers from './users'
import genreReducers from './genre'
import transactionsReducers from './transactions'
import authReducers from './auth'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  debug: false,
}

const reducer = combineReducers({
  book: bookReducers,
  author: authorReducers,
  user: userReducers,
  genre: genreReducers,
  transactions: transactionsReducers,
  auth: authReducers
})

export default persistReducer(persistConfig, reducer)