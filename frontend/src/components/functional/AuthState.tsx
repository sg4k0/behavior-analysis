import { createContext, useEffect, useState, React } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export const AuthStateContext = createContext(null)

export const UserEnabled: boolean = (user) => {
  if (user == null) return false

  return user.emailVerified
}

export const AuthProvider: React.FunctionComponent = (props: any) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (UserEnabled(currentUser) === true) setUser(currentUser)
      setLoading(false)
    })
  })

  return (
    <AuthStateContext.Provider value={user}>
      {!loading && props.children}
    </AuthStateContext.Provider>
  )
}
