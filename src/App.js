import React from 'react'
import './App.scss'

import About from './containers/About/About';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Skills from './containers/Skills/Skills';
import Testimonials from './containers/Testimonials/Testimonials';
import Work from './containers/Work/Work';

import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;