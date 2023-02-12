import { useContext } from "react";
import { Context } from "../Context";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Digimons = () => {
    const { filterData, filteredData } = useContext(Context);

    return (
        <div className="Digimons">
            <NavBar onclick={filterData} />
            <SearchBar />
            <div className="grid-container">
                {filteredData.map((data, index) => (
                    <div className="char-box" key={index}>
                        <img src={data.img} alt="Digimon" />
                        <span>
                            <h3>{data.name}</h3>
                            <p>--- {data.level} ---</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Digimons;
