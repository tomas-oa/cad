import { useReducer } from 'react'
import { type cypherState, type Action } from '../types'

const initialState: cypherState = {
  from: 'plain',
  to: 'encrypted',
  original: '',
  result: '',
  loading: false
}

// placeholder cipher
const rot13 = (message: string) => {
  const originalAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
  return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
}

function reducer (state: cypherState, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE') {
    return {
      ...state,
      from: state.to,
      to: state.from,
      original: state.result,
      result: state.original
    }
  }

  if (type === 'SET_ORIGINAL') {
    return {
      ...state,
      original: action.payload,
      result: rot13(action.payload),
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
