import { AuthStateContext } from '@/components/functional/AuthState'
import { AuthGuard } from './AuthGuard'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'

const TestingComponent: React.FunctionComponent = () => {
  const location = useLocation()
  return (
    <>
      <div data-testid="location-display">{location.pathname}</div>
    </>
  )
}

describe('AuthGuard', () => {
  it('ログイン済で、ログインページ以外へのアクセスのとき、ログインページへリダイレクトしない', () => {
    const mockUser = { name: 'test' }
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthStateContext.Provider value={mockUser}>
          <AuthGuard>
            <TestingComponent />
          </AuthGuard>
        </AuthStateContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent('/')
  })

  it('ログイン済で、ログインページへのアクセスのとき、ログインページへリダイレクトしない', () => {
    const mockUser = { name: 'test' }
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthStateContext.Provider value={mockUser}>
          <AuthGuard>
            <TestingComponent />
          </AuthGuard>
        </AuthStateContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent('/login')
  })

  it('ログインが未済で、ログインページ以外へのアクセスのとき、ログインページへリダイレクトする', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthGuard>
          <TestingComponent />
        </AuthGuard>
      </MemoryRouter>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent('/login')
  })
})
