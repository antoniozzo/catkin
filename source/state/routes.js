import { Map } from 'immutable'
import { connectRoutes, NOT_FOUND } from 'redux-first-router'

import { addReducer } from './reducers'
import { runSaga } from './sagas'

export const ROUTE_HOME = 'ROUTE_HOME'
export const ROUTE_ABOUT = 'ROUTE_ABOUT'

const routes = new Map({
    [ROUTE_HOME]: {
        id: 'home',
        path: '/',
        component: import('views/HomePage'),
        saga: import('views/HomePage/sagas'),
        reducer: import('views/HomePage/reducer'),
        isLoading: state => state.getIn(['home', 'loading'], true),
        getError: state => state.getIn(['home', 'error']),
    },
    [ROUTE_ABOUT]: {
        id: 'about',
        path: '/about',
        component: import('views/AboutPage'),
    },
    [NOT_FOUND]: {
        id: '404',
        component: import('views/NotFoundPage'),
    },
}).map(route => ({
    path: route.path,
    id: route.id,
    component: route.component,
    isLoading: route.isLoading,
    getError: route.getError,
    thunk: async () => {
        const [reducer, saga] = await Promise.all([
            route.reducer || Promise.resolve(),
            route.saga || Promise.resolve(),
        ])

        if (reducer) addReducer(route.id, reducer.default)
        if (saga) await runSaga(saga.default)
    },
})).toJS()

export const locationSelector = state => state.get('location')

export default history => connectRoutes(history, routes, {
    location: locationSelector,
})
