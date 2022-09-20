import '../styles/globals.css'
import Layout from '../components/Layout'
import Aos from 'aos'
function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
  
    Aos.init()
  }
  return ( 
        <Layout>
          <Component {...pageProps} />
        </Layout>
  )
}

export default MyApp
