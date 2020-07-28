import http from '../../services/http'
import {API} from 'react-native-dotenv';
const ip = 'http://192.168.1.16:5000/'

const getTransactions = (param) => {
  const url = `${API}books/transactions?${param}`
  console.log(url)
  return {
    type: 'GETTRANSACTIONS',
    payload: http().get(url)
  }
}

const getTransactionUser = (id) =>{
  const url = `${API}books/transactions/user/${id}`
  return {
    type: 'GETTRANSACTIONBYUSER',
    payload: http().get(url)
    }
  }

const postTransactions = (dataPost) => {
  const url = `${API}books/transactions`
  return {
    type: 'POSTTRANSACTIONS',
    payload: http().post(url, dataPost)
  }
}

const returnTransactions = (id) => {
  const url = `${API}books/transactions/${id}`
  return {
    type: 'RETURNTRANSACTIONS',
    payload: http().delete(url)
  }
}

export const clear = () => {
  return {
    type: 'CLEAR'
  }
}

export { getTransactions, postTransactions, returnTransactions, getTransactionUser }