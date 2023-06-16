import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Blog from './components/Blogs';
import BlogDetail from './components/BlogDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

import './App.css';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/blog/:slug' element={<BlogDetail/>} />
          <Route exact path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
