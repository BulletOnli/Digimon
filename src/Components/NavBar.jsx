import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <NavLink to="/Digimon">
                <i class="fa-solid fa-arrow-left"></i>
            </NavLink>
            <p onClick={() => location.reload()}>
                <i className="fa-solid fa-rotate-right"></i>
            </p>
            <p onClick={props.onclick}>All</p>
            <p onClick={props.onclick}>Fresh</p>
            <p onClick={props.onclick}>In Training</p>
            <img className="logo" src="images/logo.png" alt="" />
            <p onClick={props.onclick}>Rookie</p>
            <p onClick={props.onclick}>Champion</p>
            <p onClick={props.onclick}>Ultimate</p>
            <p onClick={props.onclick}>Mega</p>
        </div>
    );
};

export default NavBar;
