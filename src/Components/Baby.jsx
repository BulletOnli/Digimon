import Navbar from "./Navbar";
import { useContext } from "react";
import { Context } from "../Context";

const Baby = () => {
    const { digimonData } = useContext(Context);

    const levelBaby = digimonData.filter((digimon) => digimon.level === "Mega");
    console.log(levelBaby);

    return (
        <div className="Baby">
            <Navbar />
            <div className="grid-container">
                {/* {digimonData.map((data) => (
                    <div className="char-box">
                        <img src={data.img} alt="Digimon" />
                        <span>
                            <p>Name: {data.name}</p>
                            <p>Level: {data.level}</p>
                        </span>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Baby;
