import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import LoginProvdier from './shared/context/LoginProviter'
const App: React.FC = () => {
  return (
    <LoginProvdier>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoginProvdier>

  )

}

export default App
