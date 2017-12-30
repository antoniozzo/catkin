import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { fontPrimary } from 'styles/variables'

const Button = ({
    children,
    size,
    color,
    ...rest
}) => (
    <button
        className={classnames('root', size)}
        {...rest}
    >
        {children}

        <style jsx>{`
            .root {
                display: inline-block;
                max-width: 100%;
                padding: 0 30px;
                position: relative;

                border: 0;
                outline: 0;

                background-color: #000;

                color: #fff;
                font-family: ${fontPrimary};
                font-size: 1.1rem;
                font-weight: 400;
                letter-spacing: .05em;
                line-height: 1;
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                white-space: nowrap;
                -webkit-font-smoothing: auto;

                cursor: pointer;
            }

            .medium {
                min-width: 240px;
                height: 36px;

                font-size: 1.1rem;
            }
        `}</style>

        <style jsx>{`
            .root {
                background-color: ${color};
            }
        `}</style>
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
}

Button.defaultProps = {
    size: 'medium',
    color: '#000',
}

export default Button
