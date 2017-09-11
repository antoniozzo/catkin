import { createSelector } from 'reselect'

import { initialState } from './reducer'

export const stateSelector = state => state.get('home') || initialState

export default createSelector(
    stateSelector,
    state => state.toJS(),
)
