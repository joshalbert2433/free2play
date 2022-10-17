import React from "react";
import "./HomeCard.styled.css";
import { WindowsLogo, GoogleChromeLogo } from "phosphor-react";
import { Link } from "react-router-dom";

function HomeCard(props) {
    // console.log(props);
    const { title, short_description, genre, thumbnail, platform, id } =
        props.data;
    return (
        <Link
            to={{
                pathname: `/GameDetails/${id}`,
            }}
            className="home_card_container"
            id={id}
        >
            <img className="home_game_thumbnail" src={thumbnail} alt="game" />
            <div className="home_game_details">
                <a href="/" className="home_game_title">
                    {title}
                </a>
                <p className="home_game_description">{short_description}</p>
                <div className="home_game_tags">
                    <span>{genre}</span>
                </div>
            </div>
            <div className="home_game_platform">
                {/* <WindowsLogo size={32} /> */}
                {platform.includes("PC") ? (
                    <WindowsLogo size={32} />
                ) : (
                    <GoogleChromeLogo size={32} />
                )}
            </div>
        </Link>
    );
}

export default HomeCard;
