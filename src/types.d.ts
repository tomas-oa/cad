import { type ENCRYPTED, type PLAIN } from './constants'

export interface chyperState {
  from: Mode
  to: Mode
  original: string
  result: string
  loading: boolean
}

export type Action =
  | { type: 'SET_ORIGINAL', payload: string }
  | { type: 'SET_RESULT', payload: string }
  | { type: 'INTERCHANGE' }

export const Plain = typeof PLAIN
export const Encrypted = typeof ENCRYPTED
export type Mode = Plain | Encrypted
