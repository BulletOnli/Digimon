import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="Landing">
            <h1>Digital Monsters</h1>
            <h3>
                "Enter the digital world with Digimon. Follow the journey of
                human children as they team up with their digital monster
                companions and explore the vast, interconnected universe known
                as the "Digital World."
            </h3>
            <span>
                <Link to="/digimons" className="btn-1">
                    Digimon List
                </Link>
                <a href="#" className="btn-2">
                    Learn more
                </a>
            </span>

            <img className="char-img" src="/public/images/char.png" alt="" />
            <img className="digimon1" src="/images/digimon1.png" alt="" />
        </div>
    );
};

export default Landing;
