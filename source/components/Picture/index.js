import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import imagesLoaded from 'imagesloaded'

import { ImageProp, SourceProp } from 'utilities/propTypes'

import styles from './styles.css'

class Picture extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        image: ImageProp.isRequired,
        sources: PropTypes.arrayOf(SourceProp),
    }

    static defaultProps = {
        className: '',
        sources: [],
    }

    state = {
        loaded: false,
    }

    onRef = (node) => {
        if (!node) return

        imagesLoaded(node, () => {
            this.setState({ loaded: true })
        })
    }

    getClassName() {
        return classnames(
            styles.root,
            { [styles.loaded]: this.state.loaded },
            this.props.className,
        )
    }

    renderSource = props => (
        <source key={props.srcSet} {...props} />
    )

    render() {
        const {
            className,
            image,
            sources,
            ...rest
        } = this.props

        return (
            <picture
                {...rest}
                className={this.getClassName()}
                ref={this.onRef}
            >
                {sources.map(this.renderSource)}
                <img src={image.src} alt={image.alt} />
            </picture>
        )
    }
}

export default Picture
