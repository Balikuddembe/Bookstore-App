import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ErrorPage from './components/ErrorPage';
import Nav from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function RouterNav() {
  return (
    <>
      <BrowserRouter className="app-container">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterNav;
