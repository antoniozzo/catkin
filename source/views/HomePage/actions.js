import { createActions } from 'redux-actions'

const { home } = createActions({
    HOME: {
        LOADING: loading => ({ loading }),
        ERROR: error => ({ error }),
        SET: payload => payload,
    },
})

export default home
