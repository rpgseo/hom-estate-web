import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

function Layout() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
