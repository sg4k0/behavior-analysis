import React from 'react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { MemoryRouter as Router } from 'react-router-dom'

import { Login } from './Login'

export default {
  title: 'Page/Login',
  component: Login,
  decorators: [
    (Story) => {
      <Router>
        <Story />
      </Router>
    }
  ]
} as ComponentMeta<typeof Login>

const Template: ComponentStoryObj<typeof Login> = () => <Login />
export const Empty = Template.bind({})
export const Auth = Template.bind({})
Auth.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
}
