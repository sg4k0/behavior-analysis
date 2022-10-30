import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Backdrop from '@mui/material/Backdrop'
import CssBaseline from '@mui/material/CssBaseline'
import CircularProgress from '@mui/material/CircularProgress'

const themeOptions = {
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Kaisei Decol"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif'
    ].join(',')
  }
}
const theme = createTheme(themeOptions)

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense
        fallback={
          <Backdrop sx={{ color: '#FFF' }} open={true}>
            <CircularProgress />
          </Backdrop>
        }
      >
        {useRoutes(routes)}
      </React.Suspense>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
