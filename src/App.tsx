import { useReducer } from 'react'
import { type chyperState, type Action } from './types'

export default function App () {
  const initialState: chyperState = {
    from: 'plain',
    to: 'enctypted',
    original: '',
    result: '',
    loading: false
  }

  function reducer (state: chyperState, action: Action) {
    const { type } = action

    if (type === 'SET_FROM') {
      return {
        ...state,
        from: action.payload
      }
    }

    if (type === 'SET_TO') {
      return {
        ...state,
        to: action.payload
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

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main>
      <h1>wenas</h1>
    </main>
  )
}
