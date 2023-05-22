import { type ENCRYPTED, type PLAIN } from './constants'

export interface chyperState {
  from: string
  to: string
  original: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'SET_ORIGINAL', payload: string }
  | { type: 'SET_RESULT', payload: string }
  | { type: 'INTERCHANGE' }

export type Plain = typeof PLAIN
export type Encrypted = typeof ENCRYPTED
export type Mode = Plain | Encrypted
