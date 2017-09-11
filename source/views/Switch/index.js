import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AnimatedTransitionGroup, AnimatedChild } from 'animated-transition-group'

import Universal from 'components/Universal'

import selector from './selectors'
import styles from './styles.css'

const Switch = props => (
    <AnimatedTransitionGroup
        component="div"
        className={styles.root}
        appear={styles.appear}
        enter={styles.enter}
        leave={styles.leave}
        duration={500}
        debounce={500}
    >
        <AnimatedChild key={props.id}>
            <Universal {...props} />
        </AnimatedChild>
    </AnimatedTransitionGroup>
)

Switch.propTypes = {
    id: PropTypes.string.isRequired,
}

export default connect(selector)(Switch)
