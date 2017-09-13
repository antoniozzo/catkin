import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { MetaProp } from 'utilities/propTypes'

import Page from 'layouts/Page'

import selector from './selectors'
import styles from './styles.css'

const AboutPage = ({ title, content, meta }) => (
    <Page
        className={styles.root}
        {...meta}
    >
        <h1 className={styles.title}>{title}</h1>
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    </Page>
)

AboutPage.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    meta: MetaProp.isRequired,
}

export default connect(selector)(AboutPage)
