import { Map } from 'immutable'
// import { createMetaReducer } from 'redux-beacon'
// import { GoogleTagManager } from 'redux-beacon/targets/google-tag-manager'

import debug from 'utilities/debug'
import appReducer from 'views/App/reducer'

import { save, load } from './persist'
// import events from './events'

let reducers = new Map({
    app: appReducer,
    // metaReducer : createMetaReducer(events, GoogleTagManager())
})

export const addReducer = (key, reducer) => {
    reducers = reducers.set(key, reducer)
    debug('Reducer injected: %o', key)
}

export const removeReducer = (key) => {
    reducers = reducers.delete(key)
}

export const addPersistentReducer = (key, reducer, duration = 1000 * 60 * 60 * 24 * 1) => {
    const initialState = load(key)

    addReducer(key, (state = initialState, action) => {
        const newState = reducer(state, action)
        save(key, newState, duration)
        return newState
    })
}

export default (prevState = new Map(), action) =>
    reducers.reduce((state, reducer, key) =>
        state.set(key, reducer(state.get(key), action))
        , prevState)
