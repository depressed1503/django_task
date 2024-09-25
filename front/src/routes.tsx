import { BrowserRouter, Routes, Route } from "react-router-dom"
import GoodPage from "./pages/GoodPage/GoodPage"


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GoodPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}