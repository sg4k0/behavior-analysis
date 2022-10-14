import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import CssBaseline from '@mui/material/CssBaseline'

const App: React.FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <React.Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </React.Suspense>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
