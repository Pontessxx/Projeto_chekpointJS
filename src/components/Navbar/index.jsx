import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
const Home = () => <h1>Página Inicial</h1>;
const About = () => <h1>Sobre</h1>;
const Contato = () => <h1>Contato</h1>;
export default Navbar