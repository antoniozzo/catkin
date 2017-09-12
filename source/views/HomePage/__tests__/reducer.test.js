import { Map } from 'immutable'

import actions from '../actions'
import reducer, { initialState } from '../reducer'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle LOADING', () => {
        expect(reducer(initialState, actions.loading(false))).toEqual(new Map({
            title: '',
            content: '',
            meta: {},
            loading: false,
            error: '',
        }))
    })

    it('should handle ERROR', () => {
        expect(reducer(initialState, actions.error('error message'))).toEqual(new Map({
            title: '',
            content: '',
            meta: {},
            loading: false,
            error: 'error message',
        }))
    })

    it('should handle SET', () => {
        expect(reducer(initialState, actions.set({ title: 'A title' }))).toEqual(new Map({
            title: 'A title',
            content: '',
            meta: {},
            loading: false,
            error: '',
        }))
    })
})
