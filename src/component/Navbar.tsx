import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/about"> About </NavLink>
            </li>
            <li>
                <NavLink to="/test"> test </NavLink>
            </li>
            <li>
                <NavLink to="/contacts"> contacts </NavLink>
            </li>
        </ul>
    )
}