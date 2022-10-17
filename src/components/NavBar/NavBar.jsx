import React from "react";
import "./NavBar.styled.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="main_nav">
            <div className="nav_container">
                <Link to="/" className="logo">
                    Free<span className="highlight">2</span>Play
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Browse">Browse</Link>
                    </li>
                    <li>
                        <Link to="/UserProfile">Profile</Link>
                    </li>
                    <li className="login">
                        <Link to="/Login">Log In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
