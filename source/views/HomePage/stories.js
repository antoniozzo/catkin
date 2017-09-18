import React from 'react'

import { storiesOf } from '@storybook/react'

import { HomePage } from './'

const stories = storiesOf('Pages/HomePage', module)

stories.addWithStaticMarkup('Default', () => (
    <HomePage
        title="Home"
        content="This is a beautiful home page"
        meta={{
            title: 'Home page meta title',
            description: 'Home page meta description',
        }}
    />
))
