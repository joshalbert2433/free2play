import React from "react";
import "./Login.styled.css";
import { NavBar } from "../../components";
import ConsoleImage from "../../assets/images/loginBG.png";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <NavBar />
            <div className="login_main_container">
                <img className="login_image" src={ConsoleImage} alt="login" />
                <div className="login_container">
                    <div className="login_header">
                        <h1>
                            Free<span className="highlight">2</span>Play
                        </h1>
                        <p>Login if you want to be happy</p>
                    </div>
                    <form className="login_main">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        {/* <input
                            type="submit"
                            value="Login"
                            className="login_submit"
                        /> */}
                        <Link to="/" className="login_submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Login
                        </Link>
                    </form>
                    <div className="login_footer">
                        <p>Forgot Password?</p>
                        <p>
                            Not a member yet?{" "}
                            <a href="/">Create Account &gt;</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
