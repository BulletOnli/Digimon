import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import Digimons from "./Components/Digimons";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/digimons" element={<Digimons />} />
            </Routes>
        </Router>
    );
}

export default App;
