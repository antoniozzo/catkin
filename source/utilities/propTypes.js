import PropTypes from 'prop-types'

export const PromiseProp = PropTypes.shape({
    then: PropTypes.func.isRequired,
})

export const ImageProp = PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
})

export const SourceProp = PropTypes.shape({
    srcSet: PropTypes.string.isRequired,
    media: PropTypes.string,
})

export const MetaProp = PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string,
})
