import React from 'react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { MemoryRouter } from 'react-router-dom'

import { Login } from './Login'

export default {
  title: 'Page/Login',
  component: Login
} as ComponentMeta<typeof Login>

const Template: ComponentStoryObj<typeof Login> = () => <Login />
export const Empty = Template.bind({})
export const AuthFailed = Template.bind({})
AuthFailed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
}
export const AuthSuccess = Template.bind({})
AuthSuccess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const emailField = canvas.getByRole('textbox', {name: 'email'})
  const passwordField = canvas.getByRole('textbox', {name: 'password'})
  await userEvent.type(emailField, 'test@example.com')
  await userEvent.type(passwordField, 'password')
  await userEvent.click(canvas.getByRole('button'))
}
