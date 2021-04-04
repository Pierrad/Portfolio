import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { ActionButton } from './index'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/ActionButton',
  component: ActionButton,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ActionButton>> = (args) => (
  <ActionButton>{args.children}</ActionButton>
)

export const FirstStory = Template.bind({})
FirstStory.args = {
  children: 'Test',
}
