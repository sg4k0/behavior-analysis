import { React, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthStateContext } from '@/components/functional/AuthState'

export const AuthGuard: React.FunctionComponent = (props: any) => {
  const user = useContext(AuthStateContext)
  const location = useLocation()

  if (user == null && location.pathname !== '/login') {
    return <Navigate to="/login" />
  }

  return <>{props.children}</>
}
