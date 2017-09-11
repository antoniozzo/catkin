import React from 'react'
import { Provider } from 'react-redux'
import { RedBoxError } from 'redbox-react'
import { NOT_FOUND } from 'redux-first-router'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { flushChunkNames } from 'react-universal-component/server'
import transit from 'transit-immutable-js'
import flushChunks from 'webpack-flush-chunks'
import createHistory from 'history/createMemoryHistory'

import debug from 'utilities/debug'
import configureStore from 'state/store'
import Html from 'components/Html'
import App from 'views/App'

const loadStore = async function (history) {
    const { store, thunk } = await configureStore(history)

    await thunk(store)

    return store
}

export default ({ clientStats, ...rest }) => async (req, res) => {
    try {
        const history = createHistory({ initialEntries: [req.path] })
        const store = await loadStore(history)

        const content = renderToString((
            <Provider store={store}>
                <App />
            </Provider>
        ))

        const chunkNames = flushChunkNames()
        const chunks = flushChunks(clientStats, { chunkNames })

        debug('Path served: %o', req.path)
        debug('Scripts served: %o', chunks.scripts)
        debug('Styles served: %o', chunks.stylesheets)

        const state = store.getState()

        res.status(state.get('location').type === NOT_FOUND ? 404 : 200)
        res.send(`<!doctype html>${renderToStaticMarkup((
            <Html
                state={transit.toJSON(state)}
                content={content}
                assets={clientStats.assetsByChunkName}
                chunks={chunks}
                {...rest}
            />
        ))}`)
    } catch (err) {
        res.status(500).send(renderToStaticMarkup((
            <RedBoxError error={err} />
        )))
    }
}
