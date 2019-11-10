import { SET_LOADING, ADD_LOG, GET_LOGS, LOGS_ERROR } from './types'

// Add new log
export const addLog = log => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
