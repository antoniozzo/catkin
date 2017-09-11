import { Map } from 'immutable'
import { END } from 'redux-saga'

import debug from 'utilities/debug'

import { sagaMiddleware } from './middleware'

let tasks = new Map()

export const runSaga = (saga, ...args) => sagaMiddleware.run(saga, ...args).done
    .then(() => debug('Saga completed: %o', saga))

export const addSaga = (key, saga, ...args) => {
    const task = runSaga(saga, ...args)
    tasks = tasks.set(key, task)
    return task
}

export const removeSaga = (key) => {
    if (!tasks.get(key)) return

    tasks.get(key).cancel()
    tasks = tasks.delete(key)
}

export default (store) => {
    store.dispatch(END)
    return tasks.map(saga => saga.done).toArray()
}
