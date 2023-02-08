import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="Landing">
            <h1>Digimon Universe</h1>
            <h3>Collection of Digimons</h3>
            <Link to="/digimons">Browse All</Link>
        </div>
    );
};

export default Landing;
