import { Route, Routes } from "react-router-dom"
import { AboutUs } from "../pages/AboutUs"
import { Home } from "../pages/Home"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs />}/>
        </Routes>
    )   
}