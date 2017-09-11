import { Map } from 'immutable'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import configureMiddleware from './middleware'
import configureRoutes from './routes'
import reducer, { addReducer } from './reducers'

export default (history, initialState = new Map()) => {
    const {
        reducer: routeReducer,
        middleware: routeMiddleware,
        enhancer: routeEnhancer,
        thunk,
    } = configureRoutes(history)

    addReducer('location', routeReducer)

    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(
            routeEnhancer,
            configureMiddleware([
                routeMiddleware,
            ]),
        ),
    )

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            System.import('./reducers').then((reducerModule) => {
                store.replaceReducer(reducerModule.default)
            })
        })
    }

    return { store, thunk }
}
