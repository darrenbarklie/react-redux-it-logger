import {
  SET_LOADING,
  ADD_LOG,
  GET_LOGS,
  DELETE_LOG,
  LOGS_ERROR,
} from '../actions/types'

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      }
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      }
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false,
      }
    case LOGS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
