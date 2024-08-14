import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Hobbies from "./pages/Hobbies/Hobbies"
import HobbyDetail from "./pages/Hobbies/HobbyDetail"
import Dashboard from "./pages/Teacher/Dashboard"
import Income from "./pages/Teacher/Income"
import Reviews from "./pages/Teacher/Reviews"
import Layout from "./components/Layout"
import TeacherLayout from "./components/TeacherLayout"
import "./server"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/hobbies/:id" element={<HobbyDetail />} />

                    <Route path="/teacher" element={<TeacherLayout />}>
                        <Route path="/teacher" element={<Dashboard />} />
                        <Route path="/teacher/income" element={<Income />} />
                        <Route path="/teacher/reviews" element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);