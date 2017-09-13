import { delay } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'

import selector from './selectors'
import actions from './actions'

export function* fetchContent() {
    // Fetch contet from API
    //
    // const response = yield call(fetch, '/path/to/content')
    // const json = yield call(response.json)

    // Simulate API delivery delay
    yield call(delay, 1000)

    // Simulate API error
    // throw new Error('Data could not be fetched')

    return {
        title: 'Home',
        content: 'Content on the Home Page',
        meta: {
            title: 'Home',
            description: 'Home page description',
        },
    }
}

export default function* () {
    try {
        const { title } = yield select(selector)
        if (title) return

        yield put(actions.loading(true))

        const content = yield call(fetchContent)
        yield put(actions.set(content))
    } catch (err) {
        yield put(actions.error(err.message))
    }
}
