import '../styles/globals.css'
import Navbar from '../components/navbar.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
