import React from "react";
import "./MostPlayedCard.styled.css";

function MostPlayedCard(props) {
    const { thumbnail } = props.data;
    return <img className="most_played_image" src={thumbnail} alt="game" />;
}

export default MostPlayedCard;
