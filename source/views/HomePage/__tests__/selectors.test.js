import { Map } from 'immutable'

import { initialState } from '../reducer'
import selector, { stateSelector } from '../selectors'

const state = new Map({
    home: initialState,
})

describe('stateSelector', () => {
    it('should select initial state', () => {
        expect(stateSelector(new Map()))
            .toBe(initialState)
    })

    it('should select named state', () => {
        expect(stateSelector(state))
            .toBe(initialState)
    })
})

describe('main selector', () => {
    it('should transform state to js', () => {
        expect(selector(state))
            .toEqual(initialState.toJS())
    })

    it('should not recompute', () => {
        selector(state)

        expect(selector.recomputations())
            .toBe(1)
    })

    it('should recompute', () => {
        expect(selector(state.set('home', initialState.set('title', 'New title'))))
            .toMatchObject({ title: 'New title' })

        expect(selector.recomputations())
            .toBe(2)
    })
})
