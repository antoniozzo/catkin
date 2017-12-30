import React from 'react'
import { storiesOf } from '@storybook/react'

import Picture from './'

storiesOf('Picture', module)
    .add('Default', () => (
        <Picture
            image={{
                src: 'https://picsum.photos/600/400',
                alt: 'Lorem ipsum dolor sit amet',
            }}
        />
    ))
