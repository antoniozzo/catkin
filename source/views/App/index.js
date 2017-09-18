import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'

import { ROUTE_HOME, ROUTE_ABOUT } from 'state/routes'
import createSelector from 'utilities/selectors'
import Offline from 'components/Offline'
import Switch from 'views/Switch'

import { initialState } from './reducer'
import actions from './actions'
import styles from './styles.css'

class App extends Component {
    static propTypes = {
        online: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    componentDidMount() {
        window.addEventListener('online', this.onOnline)
        window.addEventListener('offline', this.onOffline)

        if (!window.navigator.onLine) this.onOffline()
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.onOnline)
        window.removeEventListener('offline', this.onOffline)
    }

    onOnline = () => this.props.dispatch(actions.online())
    onOffline = () => this.props.dispatch(actions.offline())

    render() {
        const { online } = this.props

        return (
            <div className={styles.root}>
                <Helmet
                    defaultTitle="YourSite"
                    titleTemplate="%s | YourSite"
                >
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                </Helmet>

                <nav className={styles.menu}>
                    <ul>
                        <li><NavLink exact to={{ type: ROUTE_HOME }}>Home</NavLink></li>
                        <li><NavLink exact to={{ type: ROUTE_ABOUT }}>About</NavLink></li>
                    </ul>
                </nav>

                <Switch />

                <Offline online={online} />
            </div>
        )
    }
}

export default connect(createSelector('app', initialState))(App)
