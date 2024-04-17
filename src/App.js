import './App.css';
import React from 'react';
import About from './component/about/About';
import Services from './component/services/Services';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header'
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import Team1 from './component/team/team1';
import Blog from './component/blog/Blog';
import Scrolltotop from './component/scroll to top/Scrolltotop';
import Contact from './component/contact/contact1'
import Blogdetails3 from './component/blog/Blogdetails3';
import Portfoliodetails from './component/portfolio-details/Portfoliodetails';
import Portfolio from './component/portfolio-details/Portfolio'
import Signup from './component/signup/Signup';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Scrolltotop/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/team1" element={<Team1/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blog-detail" element={<Blogdetails3 />}></Route>
          <Route path="/portfolio-detail" element={<Portfoliodetails />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
