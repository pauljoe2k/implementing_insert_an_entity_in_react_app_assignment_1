// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { Route, Routes } from 'react-router-dom';
import AddBookForm from './AddBookForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/add-book' element={<AddBookForm />}/>
    </Routes>
  );
}

export default App;