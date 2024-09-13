import './index.css';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Hobbies, { loader as hobbiesLoader } from "./pages/Hobbies/Hobbies"
import HobbyDetail from "./pages/Hobbies/HobbyDetail"
import Login from "./pages/Login"
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
import AuthRequired from "./components/AuthRequired"
import Error from "./components/Error"
//import "./server"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
            path="hobbies"
            element={<Hobbies />}
            errorElement={<Error />}
            loader={hobbiesLoader}
        />
        <Route path="hobbies/:id" element={<HobbyDetail />} />
        <Route
            path="login"
            element={<Login />}
        />




        <Route element={<AuthRequired />}>
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


        <Route path="*" element={<NotFound />} />
    </Route>
))


function App() {
    return (
        <RouterProvider router={router} />
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);