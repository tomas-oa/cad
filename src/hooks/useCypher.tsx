import { useReducer } from 'react'
import { type chyperState, type Action, type Mode } from '../types'

const initialState: chyperState = {
  from: 'plain',
  to: 'enctypted',
  original: '',
  result: '',
  loading: false
}

function reducer (state: chyperState, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE') {
    return {
      ...state,
      from: state.to,
      to: state.from
    }
  }

  if (type === 'SET_ORIGINAL') {
    return {
      ...state,
      original: action.payload,
      result: '',
      loading: true
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: action.payload,
      loading: false
    }
  }

  return state
}

export function useCypher () {
  const [{
    from,
    to,
    original,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const setInterchange = () => { dispatch({ type: 'INTERCHANGE' }) }
  const setOriginal = (payload: string) => { dispatch({ type: 'SET_ORIGINAL', payload }) }
  const setResult = (payload: string) => { dispatch({ type: 'SET_RESULT', payload }) }

  return {
    from,
    to,
    original,
    result,
    loading,
    setInterchange,
    setOriginal,
    setResult
  }
}
