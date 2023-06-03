import { useContext } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider, AuthStateContext, UserEnabled } from './AuthState'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

describe('UserEnabled', () => {
  it('Userが存在しないときはfalseを返すこと', () => {
    const result = UserEnabled(null)
    expect(result).toBeFalsy
  })

  it('Userのメールアドレス確認が未済のときはfalseを返すこと', () => {
    const user = { emailVerified: false }
    const result = UserEnabled(user)
    expect(result).toBeFalsy
  })

  it('Userのメールアドレス確認が済のときはtrueを返すこと', () => {
    const user = { emailVerified: true }
    const result = UserEnabled(user)
    expect(result).toBeTruthy
  })
})

describe('AuthProvider', () => {
  const TestingComponent: React.FunctionComponent = () => {
    const login: Promise<void> = async () => {
      try {
        console.log('login start')
        await signInWithEmailAndPassword(auth, 'test@example.com', 'password')
      } catch (error) {
        console.log(error)
      }
    }
    const user = useContext(AuthStateContext)
    return (
      <>
        <button onClick={login} type="button">
          ログイン
        </button>
        <p>{user?.email}</p>
      </>
    )
  }
  it('ログイン未済のときはユーザー情報が参照できないこと', async () => {
    render(
      <AuthProvider>
        <TestingComponent />
      </AuthProvider>
    )
    await waitFor(() => {
      expect(screen.queryByText('test')).not.toBeInTheDocument()
    })
  })

  it('ログイン済のときはユーザー情報が参照できること', async () => {
    render(
      <AuthProvider>
        <TestingComponent />
      </AuthProvider>
    )
    await userEvent.click(await screen.findByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('test@example.com')).toBeInTheDocument()
    })
  })
})
