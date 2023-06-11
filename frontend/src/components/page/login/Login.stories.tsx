import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Login } from './Login'

export default {
  title: 'Page/Login',
  component: Login,
  parameters: {
    docs: {
      description: {
        component: 'ログインページ'
      }
    }
  }
} as ComponentMeta<typeof Login>

export const Empty: ComponentStoryObj<typeof Login> = {}

export const AuthFailed: ComponentStoryObj<typeof Login> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailField = canvas.getByRole('textbox', { name: 'メールアドレス' })
    const passwordField = canvas.getByLabelText(/パスワード/i)
    userEvent.type(emailField, 'test1@example.com')
    userEvent.type(passwordField, 'password')
    userEvent.click(canvas.getByRole('button'))
  }
}

export const AuthSuccess: ComponentStoryObj<typeof Login> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailField = canvas.getByRole('textbox', { name: 'メールアドレス' })
    const passwordField = canvas.getByLabelText(/パスワード/i)
    userEvent.type(emailField, 'test@example.com')
    userEvent.type(passwordField, 'password')
    userEvent.click(canvas.getByRole('button'))
  }
}
