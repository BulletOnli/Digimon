import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="Landing">
            <h1>Digimon Universe</h1>
            <h3>
                "Enter the digital world with Digimon, a thrilling Japanese
                franchise filled with action, adventure, and creatures beyond
                your imagination. Follow the journey of human children as they
                team up with their digital monster companions and explore the
                vast, interconnected universe known as the "Digital World."
            </h3>
            <span>
                <Link to="/digimons" className="btn-1">
                    Digimon List
                </Link>
                <a href="#" className="btn-2">
                    Learn more
                </a>
            </span>
        </div>
    );
};

export default Landing;
