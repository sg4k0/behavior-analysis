import { React, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { AuthStateContext } from '@/components/functional/AuthState'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

export const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const handleEmailChange = (event: React.FormEvent<HTMLFormElement>): void => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    setPassword(event.target.value)
  }
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setIsError(true)
    }
  }

  const user = useContext(AuthStateContext)

  return (
    <>
      {user != null ? (
        <Navigate to={'/sample'} />
      ) : (
        <Container component="main" maxWidth="xs">
          {isError && (
            <Alert
              id="authorized-alert"
              variant="outlined"
              severity="error"
              sx={{ mt: 1 }}
            >
              認証に失敗しました
            </Alert>
          )}
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ログイン
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </>
  )
}
