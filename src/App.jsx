import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import Digimons from "./Components/Digimons";
import Navbar from "./Components/Navbar";
import Baby from "./Components/Baby";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/nav" element={<Navbar />} />
                <Route index element={<Landing />} />
                <Route path="/digimons" element={<Digimons />} />
            </Routes>
        </Router>
    );
}

export default App;
