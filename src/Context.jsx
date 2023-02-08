import React, { useEffect, useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [digimonData, setDigimonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    async function getData() {
        const response = await fetch(
            "https://digimon-api.vercel.app/api/digimon"
        );
        const data = await response.json();
        setDigimonData(data);
        setFilteredData(data);
    }

    function filterData(event) {
        const value = event.target.innerHTML;
        if (value === "All") {
            setFilteredData(digimonData);
            return;
        }

        const filtered = digimonData.filter(
            (digimon) => digimon.level === `${value}`
        );
        setFilteredData(filtered);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Context.Provider value={{ digimonData, filterData, filteredData }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
