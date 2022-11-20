import { Header } from '../Header'
import { Footer } from '../Footer'
import { AuthProvider } from '@/components/functional/AuthState'
import { AuthGuard } from '@/components/functional/AuthGuard'
import PropTypes from 'prop-types'
import Container from '@mui/material/Container'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <AuthProvider>
      <AuthGuard>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </AuthGuard>
    </AuthProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
