import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import ToggleTheme from './index'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/ToggleTheme',
  component: ToggleTheme,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof ToggleTheme>> = () => <ToggleTheme />

export const FirstStory = Template.bind({})
FirstStory.args = {}
