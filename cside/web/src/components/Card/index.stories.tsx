import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Card } from './index'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/Card',
  component: Card,
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Card>> = (args) => <Card {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
  address: 'string | undefined',
  city: 'string | undefined',
  date_of_birth: 'string | undefined',
  email: 'string | undefined',
  first_name: 'string | undefined',
  gender: 'string | undefined',
  last_name: 'string | undefined',
  phone: 'string | undefined',
}
