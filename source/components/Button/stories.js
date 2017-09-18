import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { checkA11y } from 'storybook-addon-a11y'

import Button from './'

storiesOf('Button', module)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Default', () => (
        <Button onClick={action('Button clicked')}>
            Just a button
        </Button>
    ))
