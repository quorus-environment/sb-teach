import './app.css'
import {Auth} from "../pages/auth/auth";
import { Routes, Route, Navigate } from "react-router-dom";


const App = () => {
    const token = localStorage.getItem("token")
    if (!token) {
        return (
            <div id="app">
                <Routes>
                    <Route path="/sign-in" element={<Auth />}></Route>
                    <Route path="*" element={<Navigate to="/sign-in" />}></Route>
                </Routes>
            </div>
        );
    }

    return (
        <div id="app">
            <Routes>
                <Route path="/" element={<div>content</div>}></Route>
                <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
        </div>
    );
}

export default App
