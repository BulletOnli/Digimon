import { useContext } from "react";
import { Context } from "../Context";

const SearchBar = () => {
    const { search, searchValue, setSearchValue, setInputValue } =
        useContext(Context);

    return (
        <div className="SearchBar">
            <div className="line"></div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    search();
                    setSearchValue("");
                }}
            >
                <input
                    type="text"
                    placeholder="Search name"
                    value={searchValue}
                    onChange={setInputValue}
                />
                <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={search}
                ></i>
            </form>
            <div className="line"></div>
        </div>
    );
};

export default SearchBar;
