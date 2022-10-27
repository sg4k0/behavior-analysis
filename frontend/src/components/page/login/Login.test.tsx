import { composeStories } from '@storybook/testing-react'
import { render, screen, waitFor } from '@testing-library/react'
import * as stories from './Login.stories'

const { Empty, AuthFailed } = composeStories(stories)

describe('Login', () => {
  it('Alertが表示されていないこと', () => {
    render(<Empty />)
    expect(screen.queryByText('認証に失敗しました')).not.toBeInTheDocument
  })

  it('認証に失敗したときはAlertが表示されていること', async () => {
    const { container } = render(<AuthFailed />)
    AuthFailed.play({ canvasElement: container })
    await waitFor(() => {
      expect(screen.getByText('認証に失敗しました')).toBeInTheDocument
    })
  })
})
