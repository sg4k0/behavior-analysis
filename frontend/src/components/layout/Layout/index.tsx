import { Header } from '../Header'
import { Footer } from '../Footer'
import PropTypes from 'prop-types'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
