import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/theme'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Layout>
           <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
  )
}

export default MyApp
