import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Projects from "../pages/Projects.jsx"

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    );
}

export default AppRouter;