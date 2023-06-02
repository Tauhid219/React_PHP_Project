import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Whyus from './components/Whyus';
import Skills from './components/Skills';
import Services from './components/Services';
import Cta from './components/Cta';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/header' element={<Header/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/hero' element={<Hero/>} />
      <Route path='/clients' element={<Clients/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/whyus' element={<Whyus/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/cta' element={<Cta/>} />
      <Route path='/blog' element={<Portfolio/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/aboutpage' element={<AboutPage/>} />
      <Route path='/servicespage' element={<ServicesPage/>} />
      <Route path='/portfoliopage' element={<PortfolioPage/>} />
      <Route path='/teampage' element={<TeamPage/>} />
      <Route path='/contactpage' element={<ContactPage/>} />
    </Routes>
    </>
  );
}

export default App;
