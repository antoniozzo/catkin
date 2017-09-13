import React from 'react'
import { mount } from 'enzyme'

import { HomePage } from '../'

const props = {
    title: 'Home title',
    content: 'Home content',
    meta: {
        title: 'Home meta title',
        description: 'Home meta description',
    },
}

describe('component', () => {
    it('should render props', () => {
        const wrapper = mount(<HomePage {...props} />)

        expect(wrapper.find('h1').text()).toBe('Home title')
        expect(wrapper.find('p').text()).toBe('Home content')
    })
})
