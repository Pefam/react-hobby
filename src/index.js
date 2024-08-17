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
import TeacherHobbies from "./pages/Teacher/TeacherHobbies"
import TeacherHobbyDetail from "./pages/Teacher/TeacherHobbyDetail"
import TeacherHobbyInfo from "./pages/Teacher/TeacherHobbyInfo"
import TeacherHobbyPricing from "./pages/Teacher/TeacherHobbyPricing"
import TeacherHobbyPhotos from "./pages/Teacher/TeacherHobbyPhotos"
import Layout from "./components/Layout"
import TeacherLayout from "./components/TeacherLayout"
import "./server"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="hobbies" element={<Hobbies />} />
                    <Route path="hobbies/:id" element={<HobbyDetail />} />

                    <Route path="teacher" element={<TeacherLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="hobbies" element={<TeacherHobbies />} />
                        <Route path="hobbies/:id" element={<TeacherHobbyDetail />}>
                            <Route index element={<TeacherHobbyInfo />} />
                            <Route path="pricing" element={<TeacherHobbyPricing />} />
                            <Route path="photos" element={<TeacherHobbyPhotos />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);