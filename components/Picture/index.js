import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import imagesLoaded from 'imagesloaded'

import { ImageProp, SourceProp } from 'utilities/proptypes'

class Picture extends PureComponent {
    static propTypes = {
        className: PropTypes.bool,
        sources: PropTypes.arrayOf(SourceProp),
        image: ImageProp.isRequired,
    }

    static defaultProps = {
        className: '',
        sources: [],
    }

    state = {
        loaded: false,
    }

    onRef = (picture) => {
        if (!picture) return

        imagesLoaded(picture, () => {
            this.setState({ loaded: true })
        })
    }

    render() {
        const {
            className,
            image,
            sources,
            ...rest
        } = this.props

        const { loaded } = this.state

        return (
            <picture
                {...rest}
                className={classnames('root', className, { loaded })}
                ref={this.onRef}
            >
                {sources.map(props => (
                    <source key={props.srcSet} {...props} />
                ))}
                <img src={image.src} alt={image.alt} />

                <style jsx>{`
                    .root {
                        display: inline-block;
                        text-align: center;
                    }

                    img {
                        max-width: 100%;
                        max-height: inherit;
                        opacity: 0;

                        @nest .loaded & {
                            transition: opacity 1s ease;
                            opacity: 1;
                        }
                    }
                `}</style>
            </picture>
        )
    }
}

export default Picture
