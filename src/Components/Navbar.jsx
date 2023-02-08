import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
            <NavLink to="/">
                <img src="/public/images/logo.png" alt="" />
            </NavLink>
            <ul>
                <li onClick={props.onclick}>All</li>
                <li onClick={props.onclick}>Fresh</li>
                <li onClick={props.onclick}>In Training</li>
                <li onClick={props.onclick}>Rookie</li>
                <li onClick={props.onclick}>Champion</li>
                <li onClick={props.onclick}>Ultimate</li>
                <li onClick={props.onclick}>Mega</li>
            </ul>
        </nav>
    );
};

export default Navbar;
