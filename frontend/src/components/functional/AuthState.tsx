import { createContext, useEffect, useState, React } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export const AuthStateContext = createContext(null)

export const AuthProvider: React.FunctionComponent = (props: any) => {
  const userEnabled: boolean = (user) => {
    if (user == null) return false

    return user.emailVerified
  }

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (userEnabled(currentUser) === true) setUser(currentUser)
    })
  })

  return (
    <AuthStateContext.Provider value={user}>
      {props.children}
    </AuthStateContext.Provider>
  )
}
