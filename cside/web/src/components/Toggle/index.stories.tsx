import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Toggle } from './index'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/Toggle',
  component: Toggle,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Toggle>> = (args) => <Toggle>{args.children}</Toggle>

export const FirstStory = Template.bind({})
FirstStory.args = {
  children: 'Test',
}
