import React from "react";
import "./NavBar.styled.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="main_nav">
            <div className="nav_container">
                <Link to="/" className="logo">
                    Free2Play
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Browse">Browse</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
