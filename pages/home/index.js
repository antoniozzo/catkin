import React from 'react'

import Page from 'layouts/Page'

import { mobile } from 'styles/media'

export default () => (
    <Page>
        <div className="root">
            <h1>Home</h1>
        </div>

        <style jsx>{`
            .root {
                background-color: red;
            }

            h1 {
                font-size: 30px;

                @media ${mobile} {
                    font-size: 20px;
                }
            }
        `}</style>
    </Page>
)
