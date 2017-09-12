import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Button = ({ children, size, ...rest }) => (
    <button
        className={classnames(
            styles.root,
            styles[size],
        )}
        {...rest}
    >
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Button.defaultProps = {
    size: 'medium',
}

export default Button
