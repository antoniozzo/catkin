import { handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const initialState = new Map({
    title: '',
    content: '',
    meta: {},

    loading: true,
    error: '',
})

export default handleActions({
    HOME: {
        LOADING: state => state.merge({
            loading: true,
            error: '',
        }),
        ERROR: (state, { payload }) => state.merge({
            loading: false,
            error: payload.error,
        }),
        SET: (state, { payload }) => state.merge({
            ...payload,
            loading: false,
            error: '',
        }),
    },
}, initialState)
