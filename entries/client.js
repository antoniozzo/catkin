import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createBrowserHistory'
import transit from 'transit-immutable-js'

import configureStore from 'state/store'
import App from 'views/App'

import 'assets/styles.css'

const initialState = window.__INITIAL_STATE__
    ? transit.fromJSON(window.__INITIAL_STATE__)
    : undefined

const rootEl = document.getElementById('root')
const { store } = configureStore(createHistory(), initialState)

const render = (Component) => {
    ReactDOM.render((
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>
    ), rootEl)
}

render(App)

if (module.hot) {
    module.hot.accept('views/App', () =>
        render(require('views/App').default),
    )
}
