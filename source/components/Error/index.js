import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ error }) => (
    <div>Error: {error}</div>
)

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
}

export default ErrorMessage
