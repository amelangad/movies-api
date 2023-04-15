import React, {Suspense} from 'react'
const Header = React.lazy (() => import ('../components/Header'))
//import Header from '../components/Header'
const Main = React.lazy (() => import ('../components/Main'))
//import Footer from '../components/Footer'
const Footer = React.lazy (() => import ('../components/Footer'))
import Loading from '../components/Loading'

function Home() {

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Main />
      <Footer />
   </Suspense>
  )
}

export default Home
