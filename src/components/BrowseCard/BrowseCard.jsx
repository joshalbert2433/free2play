import React from "react";
import { WindowsLogo, GoogleChromeLogo } from "phosphor-react";
import "./BrowseCard.styled.css";
import { Link } from "react-router-dom";

function BrowseCard(props) {
    const { id, title, thumbnail, short_description, genre, platform } = props;

    return (
        <>
            <Link
                to={{
                    pathname: `/GameDetails/${id}`,
                    state: { stateParam: true },
                }}
                className="browse_card"
                id={id}
            >
                <div className="browse_card_header">
                    <img src={thumbnail} alt="game" />
                </div>
                <div className="browse_card_content">
                    <p className="browse_card_title">{title}</p>
                    <p className="browse_card_description">
                        {short_description}
                    </p>
                </div>
                <div className="browse_card_footer">
                    <span>{genre}</span>
                    {platform.includes("PC") ? (
                        <WindowsLogo size={20} />
                    ) : (
                        <GoogleChromeLogo size={20} />
                    )}
                </div>
            </Link>
        </>
    );
}

export default BrowseCard;
