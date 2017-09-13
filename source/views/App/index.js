import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'

import { ROUTE_HOME, ROUTE_ABOUT } from 'state/routes'
import Switch from 'views/Switch'

import styles from './styles.css'

const App = () => (
    <div className={styles.root}>
        <Helmet
            defaultTitle="YourSite"
            titleTemplate="%s | YourSite"
        >
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Helmet>

        <nav className={styles.menu}>
            <ul>
                <li><NavLink exact to={{ type: ROUTE_HOME }}>Home</NavLink></li>
                <li><NavLink exact to={{ type: ROUTE_ABOUT }}>About</NavLink></li>
            </ul>
        </nav>

        <Switch />
    </div>
)

export default connect()(App)
