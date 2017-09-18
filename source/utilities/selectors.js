import { createSelector } from 'reselect'

export const createStateSelector = (namespace, initialState) =>
    state => state.get(namespace) || initialState

export default (namespace, initialState) => createSelector(
    createStateSelector(namespace, initialState),
    state => state.toJS(),
)
