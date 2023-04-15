import React, {Suspense} from 'react'
const ContactMain = React.lazy (() => import ('../components/ContactMain'))
const Footer = React.lazy (() => import ('../components/Footer'))
import Loading from '../components/Loading'


function Contact() {
  return (
  <Suspense fallback={<Loading />}>
  <ContactMain />
  <Footer />
  </Suspense>
  )
}

export default Contact
