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
import HobbyDetail, { loader as hobbyDetailLoader } from "./pages/Hobbies/HobbyDetail"
import Login, { loader as loginLoader } from "./pages/Login"
import Dashboard from "./pages/Teacher/Dashboard"
import Income from "./pages/Teacher/Income"
import Reviews from "./pages/Teacher/Reviews"
import TeacherHobbies, { loader as teacherHobbiesLoader } from "./pages/Teacher/TeacherHobbies"
import TeacherHobbyDetail, { loader as teacherHobbyDetailLoader } from "./pages/Teacher/TeacherHobbyDetail"
import TeacherHobbyInfo from "./pages/Teacher/TeacherHobbyInfo"
import TeacherHobbyPricing from "./pages/Teacher/TeacherHobbyPricing"
import TeacherHobbyPhotos from "./pages/Teacher/TeacherHobbyPhotos"
import Layout from "./components/Layout"
import TeacherLayout from "./components/TeacherLayout"
//import AuthRequired from "./components/AuthRequired"
import Error from "./components/Error"
//import "./server"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
            path="login"
            element={<Login />}
            loader={loginLoader}
        />
        <Route
            path="hobbies"
            element={<Hobbies />}
            errorElement={<Error />}
            loader={hobbiesLoader}
        />
        <Route
            path="hobbies/:id"
            element={<HobbyDetail />}
            loader={hobbyDetailLoader}
        />

            <Route path="teacher" element={<TeacherLayout />}>
            <Route
                index
                element={<Dashboard />}
                loader={async () => {
                    return null
                }}
            />
                <Route 
                    path="income"
                    element={<Income />}
                    loader={async () => {
                    return null
                    }}
            />
                <Route 
                    path="reviews" 
                    element={<Reviews />}
                    loader={async () => {
                    return null
                    }}
                />
                <Route 
                    path="hobbies" 
                    element={<TeacherHobbies />}
                    loader={teacherHobbiesLoader}
                />
                <Route 
                    path="hobbies/:id" 
                    element={<TeacherHobbyDetail />}
                    loader={teacherHobbyDetailLoader}
                >
                    <Route 
                        index 
                        element={<TeacherHobbyInfo />}
                        loader={async () => {
                        return null
                        }}
                    />
                    <Route 
                        path="pricing" 
                        element={<TeacherHobbyPricing />}
                        loader={async () => {
                        return null
                        }}
                    />
                    <Route 
                        path="photos" 
                        element={<TeacherHobbyPhotos />}
                        loader={async () => {
                        return null
                        }}
                    />
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