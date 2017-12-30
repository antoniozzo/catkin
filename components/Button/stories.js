import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import Button from './'

storiesOf('Button', module)
    .add('Default', () => (
        <Button
            color={text('Color', '#000')}
            onClick={action('Button clicked')}
        >
            Just a button
        </Button>
    ))
