import React from 'react' //rafce

import { Footer, Blog, Possibility, Features, WhatProduct, Header }  from './containers'; // carpeta containers
import { CTA, Brand, Navbar } from './components'; // carpeta components
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>
    <Navbar />
    <Header />
      </div>
      <Brand />
      <WhatProduct />
      <Possibility />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App