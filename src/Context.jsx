import React, { useEffect, useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [digimonData, setDigimonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

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

    function setInputValue(e) {
        const value = e.target.value;
        const finalValue = value.charAt(0).toUpperCase() + value.slice(1);
        setSearchValue(finalValue);
    }

    function search() {
        const findDigimon = digimonData.find(
            (digimon) => digimon.name === searchValue
        );

        if (findDigimon) {
            setFilteredData([findDigimon]);
        } else {
            window.alert("Invalid Name");
            setFilteredData(digimonData);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Context.Provider
            value={{
                digimonData,
                filterData,
                filteredData,
                searchValue,
                setSearchValue,
                search,
                setInputValue,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
