import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes,Router, useParams } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />}/>

        </Routes>
   
      
    </BrowserRouter>
  );
}

export default App;
