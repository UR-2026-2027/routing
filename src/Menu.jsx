import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Menu() {
    const links = [
        { text: "Home", path: "/", end: true},
        { text: "About", path: "/about", end: true },
        { text: "Contact", path: "/contact", end: true }
    ];

    //const currentLocation = useLocation();
    return (
        <div>
            {links.map((link) => (
                <NavLink key={link.path} 
                to={link.path} 
                end={link.end} 
                className={ ({isActive}) => isActive ? 
                    "menu-link-active" : "menu-link"}>
                    {link.text}
                </NavLink>
            ))}
        </div>
    )
}

export default Menu