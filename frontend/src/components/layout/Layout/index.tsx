import { Header } from '../Header'
import { Footer } from '../Footer'
import { AuthProvider } from '@/components/functional/AuthState'
import PropTypes from 'prop-types'
import Container from '@mui/material/Container'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <AuthProvider>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </AuthProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
