import { React, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import Avatar from '@mui/material/Avatar'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function Copyright(props: any): React.FunctionComponent {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href={import.meta.env.VITE_MYWEBSITE_URL}
        target="website"
      >
        {import.meta.env.VITE_MYWEBSITE_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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

  const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser.emailVerified) setUser(currentUser)
    })
  })

  return (
    <>
      {user !== null ? (
        // <Navigate to={'/sample'} />
        <div>test</div>
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
              <LockOutlinedIcon />
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
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      )}
    </>
  )
}
