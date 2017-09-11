import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { MetaProp } from 'utilities/propTypes'

import Page from 'layouts/Page'

import Picture from 'components/Picture'

import selector from './selectors'
import styles from './styles.css'

const HomePage = ({ title, content, meta }) => (
    <Page {...meta}>
        <h1 className={styles.title}>{title}</h1>
        <p>{content}</p>
        <Picture
            image={{
                src: 'https://unsplash.it/700/300',
                alt: 'Home image',
            }}
            sources={[
                {
                    media: '(max-width: 699px)',
                    srcSet: 'https://unsplash.it/700/300',
                },
                {
                    media: '(min-width: 700px)',
                    srcSet: 'https://unsplash.it/1400/600',
                },
            ]}
        />
    </Page>
)

HomePage.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    meta: MetaProp.isRequired,
}

export default connect(selector)(HomePage)
