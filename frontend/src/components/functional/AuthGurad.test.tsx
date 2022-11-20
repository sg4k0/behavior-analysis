import { beforeEach, vi } from "vitest"
import { useContext } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider } from './AuthState'
import { AuthGurad } from './AuthGuard'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { Navigate, useLocation } from 'react-router-dom'

describe('AuthGurad', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })
  const TestingComponent: React.FunctionComponent = () => {
    const login: Promise<void> = async () => {
      await signInWithEmailAndPassword(auth, 'test@example.com', 'password')
    }
    const user = useContext(AuthStateContext)
    return (
      <>
        <button onClick={login} type="button">
          ログイン
        </button>
      </>
    )
  }
  it('ログイン未済かつログインページ以外のときはログインページへ遷移すること', async () => {
    vi.mock('react-router-dom', () => ({
      useLocation: vi.fn().mockImplementation(() => {
        return { pathname: "/test" };
      })
    }))
    const navigateSpy = vi.spyOn(Navigate)
    render(
      <AuthProvider>
        <AuthGurad>
          <TestingComponent />
        </AuthGurad>
      </AuthProvider>
    )
    expect(navigateSpy).toHaveBeenCalledWith(['/login'])
  })

  // it('ログイン済のときはユーザー情報が参照できること', async () => {
  //   render(
  //     <AuthProvider>
  //       <AuthGurad>
  //         <TestingComponent />
  //       </AuthGurad>
  //     </AuthProvider>
  //   )
  //   await userEvent.click(await screen.findByRole('button'))
  //   await waitFor(() => {
  //     expect(screen.getByText('test@example.com')).toBeInTheDocument()
  //   })
  // })
})
