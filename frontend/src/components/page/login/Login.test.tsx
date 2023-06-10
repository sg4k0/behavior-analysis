import { composeStories } from '@storybook/testing-react'
import { act } from 'react-dom/test-utils'
import { render, screen, waitFor } from '@testing-library/react'
import * as stories from './Login.stories'

const { Empty, AuthFailed, AuthSuccess } = composeStories(stories)

describe('Login', () => {
  it('Alertが表示されていないこと', () => {
    render(<Empty />)
    expect(screen.queryByText('認証に失敗しました')).not.toBeInTheDocument
  })

  it('認証に失敗したときはAlertが表示されていること', async () => {
    const { container } = render(<AuthFailed />)
    await act(async () => {
      await AuthFailed.play({ canvasElement: container })
    })
    await waitFor(() => {
      expect(screen.getByText('認証に失敗しました')).toBeInTheDocument
    })
  })

  it('認証に成功したときはAlertが表示されていないこと', async () => {
    const { container } = render(<AuthSuccess />)
    await act(async () => {
      await AuthSuccess.play({ canvasElement: container })
    })
    await waitFor(() => {
      expect(screen.queryByText('認証に失敗しました')).not.toBeInTheDocument
    })
  })
})
