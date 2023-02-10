const NavFilter = (props) => {
    return (
        <div className="NavFilter">
            <p className="reload-left" onClick={props.onclick}>
                All
            </p>
            <p onClick={props.onclick}>Fresh</p>
            <p onClick={props.onclick}>In Training</p>
            <p onClick={props.onclick}>Rookie</p>
            <form>
                <input type="text" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
            <p onClick={props.onclick}>Champion</p>
            <p onClick={props.onclick}>Ultimate</p>
            <p onClick={props.onclick}>Mega</p>
            <p className="reload-right" onClick={() => location.reload()}>
                <i className="fa-solid fa-rotate-right"></i>
            </p>
        </div>
    );
};

export default NavFilter;
