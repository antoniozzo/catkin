import PropTypes from 'prop-types'

export const ImageProp = PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
})

export const SourceProp = PropTypes.shape({
    srcSet: PropTypes.string.isRequired,
    media: PropTypes.string,
})
