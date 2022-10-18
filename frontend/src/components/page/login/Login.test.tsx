import { composeStories } from '@storybook/testing-react'
import { render, screen, waitFor } from '@testing-library/react'
import * as stories from './Login.stories'

const { Empty, Auth } = composeStories(stories)

describe('Login', () => {
  it('Alertが表示されていないこと', () => {
    render(<Empty />)
    expect(screen.queryByText('認証成功')).not.toBeInTheDocument
  })

  it('認証に成功したときはAlertが表示されていること', async () => {
    const { container } = render(<Auth />)
    Auth.play({ canvasElement: container })
    await waitFor(() => {
      expect(screen.getByText('認証成功')).toBeInTheDocument
    })
  })
})
