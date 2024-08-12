import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Hobbies from "./pages/Hobbies"
import HobbyDetail from "./pages/HobbyDetail"

import "./server"

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">#HOBBIES</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/hobbies">Hobbies</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/hobbies/:id" element={<HobbyDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);