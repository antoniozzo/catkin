import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import { createMiddleware } from 'redux-beacon'
// import { GoogleTagManager } from 'redux-beacon/targets/google-tag-manager'

// import events from './events'

export const sagaMiddleware = createSagaMiddleware()

export default (initial = []) => {
    const middlewares = initial

    // middlewares.push(createMiddleware(events, GoogleTagManager()))
    middlewares.push(sagaMiddleware)

    if (process.browser && process.env.NODE_ENV === 'development') {
        middlewares.push(createLogger({
            collapsed: true,
            stateTransformer: state => state.toJS(),
        }))
    }

    return applyMiddleware(...middlewares)
}
