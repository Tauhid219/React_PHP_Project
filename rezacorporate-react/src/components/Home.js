import React from 'react'
import About from './About'
import Clients from './Clients'
import Contact from './Contact'
import Cta from './Cta'
import FAQ from './FAQ'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Pricing from './Pricing'
import Services from './Services'
import Skills from './Skills'
import Team from './Team'
import Whyus from './Whyus'

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Clients/>
    <About/>
    <Whyus/>
    <Skills/>
    <Services/>
    <Cta/>
    <Portfolio/>
    <Team/>
    <Pricing/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </>
  )
}
