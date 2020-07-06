const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataBook: [],
  pageInfo: []
}

const bookReducers = (state=initialState, action) => {
  switch(action.type){
    case 'GETBOOK_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETBOOK_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        // errorMsg: action.payload.response.data.msg,
      }
    }
    case 'GETBOOK_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataBook: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default bookReducers