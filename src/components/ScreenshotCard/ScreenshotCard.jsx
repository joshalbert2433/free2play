import React from "react";
import "./ScreenshotCard.styled.css";

function ScreenshotCard(props) {
    // console.log(image_url);
    return <img className="screenshot_card" src={props.image_url} alt="game" />;
}

export default ScreenshotCard;
