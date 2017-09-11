import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Page = ({
    url,
    canonicalUrl,
    title,
    description,
    image,
    type,
    card,
    handle,
    site,
    stock,
    currency,
    amount,
    children,

    ...rest
}) => (
    <div {...rest}>
        <Helmet title={title} >
            {(url || canonicalUrl) && <link rel="canonical" href={url || canonicalUrl} />}

            {description && <meta name="description" content={description} />}
            {image && <meta name="image" content={image} />}

            {url && <meta property="og:url" content={url} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            {site && <meta property="og:site_name" content={site} />}
            {type && <meta property="og:type" content={type} />}

            {card && <meta name="twitter:card" content={card} />}
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {handle && <meta name="twitter:site" content={handle} />}
            {handle && <meta name="twitter:creator" content={handle} />}
            {image && <meta name="twitter:image:src" content={image} />}

            {type === 'product' && stock && <meta name="product:availability" content={stock} />}
            {type === 'product' && currency && <meta name="product:price:currency" content={currency} />}
            {type === 'product' && amount && <meta name="product:price:amount" content={amount} />}
            {type === 'product' && site && <meta name="product:brand" content={site} />}

            {title && <meta itemProp="name" content={title} />}
            {description && <meta itemProp="description" content={description} />}
            {image && <meta itemProp="image" content={image} />}
        </Helmet>

        {children}
    </div>
)

Page.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string,
    canonicalUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    card: PropTypes.string,
    handle: PropTypes.string,
    site: PropTypes.string,
    stock: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.number,
}

Page.defaultProps = {
    url: '',
    canonicalUrl: '',
    title: '',
    description: '',
    image: '',
    type: 'website',
    card: 'summary',
    handle: '@yoursite',
    site: 'YourSite',
    stock: '',
    currency: '',
    amount: 0,
}

export default Page
