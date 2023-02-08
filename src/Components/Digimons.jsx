import Navbar from "./Navbar";
import { useContext } from "react";
import { Context } from "../Context";

const Digimons = () => {
    const { filterData, filteredData } = useContext(Context);

    return (
        <div className="Digimons">
            <Navbar onclick={filterData} />
            <div className="grid-container">
                {filteredData.map((data, index) => (
                    <div className="char-box" key={index}>
                        <img src={data.img} alt="Digimon" />
                        <span>
                            <p>Name: {data.name}</p>
                            <p>Level: {data.level}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Digimons;
