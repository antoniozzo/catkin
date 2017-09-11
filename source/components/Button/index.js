import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

class Button extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
    }

    static defaultProps = {
        size: 'medium',
    }

    render() {
        const { children, size, ...rest } = this.props

        return (
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
    }
}

export default Button
