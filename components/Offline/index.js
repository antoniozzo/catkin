import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Offline = ({ online }) => (
    <div
        className={classnames('root', { online })}
    >
        <p className="title">Offline</p>
        <p className="description">Waiting for network connection...</p>

        <style jsx>{`
            .root {
                z-index: 999;
                position: fixed;
                display: flex;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #fff;
                opacity: 1;
                visibility: visible;
                transition: all .5s ease;
            }

            .online {
                opacity: 0;
                visibility: hidden;
            }

            .title {
                font-size: 30px;
            }

            .description {
                font-size: 20px;
            }
        `}</style>
    </div>
)

Offline.propTypes = {
    online: PropTypes.bool,
}

Offline.defaultProps = {
    online: false,
}

export default Offline
