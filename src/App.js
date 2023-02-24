import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/Books';
import './App.css';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <div className="component-body">
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
