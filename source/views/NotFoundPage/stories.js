import React from 'react'

import { storiesOf } from '@storybook/react'

import NotFoundPage from './'

const stories = storiesOf('Pages/NotFoundPage', module)

stories.add('Default', () => (
    <NotFoundPage />
))
