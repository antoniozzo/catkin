import { handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const initialState = new Map({
    online: true,
})

export default handleActions({
    APP: {
        OFFLINE: state => state.set('online', false),
        ONLINE: state => state.set('online', true),
    },
}, initialState)
