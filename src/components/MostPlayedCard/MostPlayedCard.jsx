import React from "react";
import "./MostPlayedCard.styled.css";
import { Link } from "react-router-dom";

function MostPlayedCard(props) {
    const { thumbnail, id } = props.data;
    return (
        <>
            <Link
                to={{
                    pathname: `/GameDetails/${id}`,
                }}
                id={id}
            >
                <img className="most_played_image" src={thumbnail} alt="game" />
                ;
            </Link>
        </>
    );
}

export default MostPlayedCard;
