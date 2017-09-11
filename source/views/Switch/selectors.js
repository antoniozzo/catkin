import { createSelector, createStructuredSelector } from 'reselect'

import { locationSelector } from 'state/routes'

export const componentSelector = createSelector(
    locationSelector,
    location => location.routesMap[location.type].component,
)

export const idSelector = createSelector(
    locationSelector,
    location => location.routesMap[location.type].id,
)

export const isLoadingSelector = createSelector(
    locationSelector,
    state => state,
    (location, state) =>
        location.routesMap[location.type].isLoading &&
        location.routesMap[location.type].isLoading(state),
)

export const errorSelector = createSelector(
    locationSelector,
    state => state,
    (location, state) =>
        location.routesMap[location.type].getError &&
        location.routesMap[location.type].getError(state),
)

export default createStructuredSelector({
    id: idSelector,
    component: componentSelector,
    isLoading: isLoadingSelector,
    error: errorSelector,
})
