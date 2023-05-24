import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginProvdier from './shared/context/LoginProviter'
import Login from './pages/Login/Login';
import './App.css';
const App = () => {
  return (
    <LoginProvdier>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoginProvdier>

  )

}

export default App
