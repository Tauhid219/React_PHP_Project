import React from 'react'
import About from './About'
import Clients from './Clients'
import Footer from './Footer'
import Header from './Header'
import Skills from './Skills'
import Whyus from './Whyus'

export default function AboutPage() {
  return (
    <>
    <Header/>
    <br/><br/><br/><br/>
    
    <Clients/>
    <About/>
    <Whyus/>
    <Skills/>
    
    {/* <!-- End #main --> */}
    <Footer/>
    </>
  )
}
