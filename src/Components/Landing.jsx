import { Link } from "react-router-dom";
import charImg from "/images/char.png";
import digimon1Img from "/images/digimon1.png";

const Landing = () => {
    return (
        <div className="Landing">
            <h1>Digital Monsters</h1>
            <h3>
                "Enter the digital world with <strong>Digimon</strong>. Follow
                the journey of human children as they team up with their digital
                monster companions and explore the vast, interconnected universe
                known as the <strong>"Digital World"</strong>.
            </h3>
            <span>
                <Link to="/digimons" className="btn-1">
                    Digimon List
                </Link>
                <Link to="/about" className="btn-2">
                    Learn more
                </Link>
            </span>

            <img className="char-img" src={charImg} alt="" />
            <img className="digimon1" src={digimon1Img} alt="" />
        </div>
    );
};

export default Landing;
