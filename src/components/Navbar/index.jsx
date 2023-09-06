import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import Products from '../../pages/Products'
import Home from '../../pages/Home'
import Sobre from '../../pages/Sobre'
import Footer from '../Footer'
import './Nav.css'
const Navbar = () => {
  return (
    <>
        <BrowserRouter>
            <nav className='navbar'>
                <div className='logo'><Link to="/">Front<span>end</span></Link></div>
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
            <Footer/>
        </BrowserRouter>
    </>
  )
}
export default Navbar