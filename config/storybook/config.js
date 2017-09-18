import 'assets/styles.css'

import { addDecorator, setAddon, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import staticMarkup from 'react-storybook-addon-static-markup'

setAddon(staticMarkup)
addDecorator(withKnobs)

const req = require.context('../../source', true, /stories\.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
