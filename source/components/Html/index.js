import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// const dev = process.env.NODE_ENV === 'development'

const Html = ({ content, state, icons, chunks }) => {
    const head = Helmet.renderStatic()
    const htmlAttrs = head.htmlAttributes.toComponent()
    const bodyAttrs = head.bodyAttributes.toComponent()

    return (
        <html lang="en">
            <head
                {...htmlAttrs}
                dangerouslySetInnerHTML={{
                    __html: `
                        ${head.title.toString()}
                        ${head.meta.toString()}
                        ${head.link.toString()}
                        ${icons}
                        ${chunks.styles}
                        ${''/* !dev && process.env.GTM_ID && `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${process.env.GTM_ID}');</script>` || '' */}
                    `,
                }}
            />
            <body {...bodyAttrs}>
                {/* !dev && process.env.GTM_ID && (
                    <noscript>
                        <iframe
                            title="gtm"
                            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
                            height={0}
                            width={0}
                            style={{ display : 'none' }}
                        />
                    </noscript>
                ) */}

                <div
                    id="root"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.__INITIAL_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
                            window.__CSS_CHUNKS__ = ${JSON.stringify(chunks.cssHashRaw)};
                        `,
                    }}
                />

                <chunks.Js />
            </body>
        </html>
    )
}

Html.propTypes = {
    content: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    icons: PropTypes.string,
    chunks: PropTypes.shape({
        Js: PropTypes.func.isRequired,
        styles: PropTypes.object.isRequired,
        cssHashRaw: PropTypes.object.isRequired,
    }).isRequired,
}

Html.defaultProps = {
    icons: '',
}

export default Html
