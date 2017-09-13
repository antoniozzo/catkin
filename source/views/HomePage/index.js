import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { MetaProp } from 'utilities/propTypes'

import Page from 'layouts/Page'

import Picture from 'components/Picture'

import selector from './selectors'
import styles from './styles.css'

export const HomePage = ({ title, content, meta }) => (
    <Page {...meta}>
        <Picture
            className={styles.background}
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
        <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
        </div>
    </Page>
)

HomePage.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    meta: MetaProp.isRequired,
}

export default connect(selector)(HomePage)
