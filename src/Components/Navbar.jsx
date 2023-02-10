import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                <img src="/public/images/logo.png" alt="" />
            </NavLink>
            <span>
                <p></p>
                <p>About</p>
            </span>
        </nav>
    );
};

export default Navbar;
