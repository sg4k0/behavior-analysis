import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

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
      <React.Suspense fallback={<p>Loading...</p>}>
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
