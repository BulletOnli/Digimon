import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import Digimons from "./Components/Digimons";
import About from "./Components/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/digimons" element={<Digimons />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
