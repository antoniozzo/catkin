import { createActions } from 'redux-actions'

const { app } = createActions({
    APP: {
        OFFLINE: undefined,
        ONLINE: undefined,
    }
})

export default app
