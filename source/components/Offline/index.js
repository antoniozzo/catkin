import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Offline = ({ online }) => (
    <div
        className={classnames(
            styles.root,
            { [styles.online]: online },
        )}
    >
        <p className={styles.title}>Offline</p>
        <p className={styles.description}>Waiting for network connection...</p>
    </div>
)

Offline.propTypes = {
    online: PropTypes.bool,
}

Offline.defaultProps = {
    online: false,
}

export default Offline
