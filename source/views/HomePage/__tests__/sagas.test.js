import { delay } from 'redux-saga'
import { call, select, put } from 'redux-saga/effects'

import mainSaga, { fetchContent } from '../sagas'
import actions from '../actions'
import selector from '../selectors'

describe('main saga handles errors', () => {
    const gen = mainSaga()
    gen.next()

    it('should dispatch HOME/ERROR', () => {
        expect(gen.throw({ message: 'Error message' }).value)
            .toEqual(put(actions.error('Error message')))
    })
})

describe('main saga with existing data', () => {
    const gen = mainSaga()

    it('should check if data already exists', () => {
        expect(gen.next().value)
            .toEqual(select(selector))
    })

    it('should end', () => {
        expect(gen.next({ title: 'A title' }).done)
            .toBe(true)
    })
})

describe('main saga with no existing data', () => {
    const gen = mainSaga()

    it('should check if data already exists', () => {
        expect(gen.next().value)
            .toEqual(select(selector))
    })

    it('should dispatch HOME/LOADING', () => {
        expect(gen.next({ title: '' }).value)
            .toEqual(put(actions.loading(true)))
    })

    it('should fetch content', () => {
        expect(gen.next().value)
            .toEqual(call(fetchContent))
    })

    it('should dispatch HOME/SET', () => {
        expect(gen.next({ title: 'A title' }).value)
            .toEqual(put(actions.set({ title: 'A title' })))
    })
})

describe('fetch content saga', () => {
    const gen = fetchContent()

    it('should simulate api latency', () => {
        expect(gen.next().value)
            .toEqual(call(delay, 1000))
    })

    it('should end', () => {
        expect(gen.next().value)
            .toEqual({
                title: 'Home',
                content: 'Content on the Home Page',
                meta: {
                    title: 'Home',
                    description: 'Home page description',
                },
            })
    })
})
