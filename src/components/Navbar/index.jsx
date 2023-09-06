import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import Products from '../../pages/Products'
import Home from '../../pages/Home'
import Sobre from '../../pages/Sobre'
import './Nav.css'
const Navbar = () => {
  return (
    <>
        <BrowserRouter>
            <nav className='navbar'>
                <div className='logo'>Front<span>end</span></div>
                <ul className='menu'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Sobre />} />
                <Route path="/produtos" element={<Products />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
export default Navbar