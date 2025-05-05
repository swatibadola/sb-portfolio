import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Connect from './components/Connect'


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
};

export default App;