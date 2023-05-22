export interface chyperState {
  from: string
  to: string
  original: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'SET_FROM', payload: string }
  | { type: 'SET_TO', payload: string }
  | { type: 'SET_ORIGINAL', payload: string }
  | { type: 'SET_RESULT', payload: string }
