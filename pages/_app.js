import '../styles/globals.css'
import Navbar from './components/navbar.jsx'
import './layoutcss.css'

function MyApp({Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
