import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Page = ({
    children,
    ...rest
}) => (
    <div {...rest}>
        {children}

        <Link prefetch href="/">
            <a>Home</a>
        </Link>

        <Link prefetch href="/about">
            <a>About</a>
        </Link>
    </div>
)

Page.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Page
