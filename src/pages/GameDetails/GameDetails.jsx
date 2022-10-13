import React, { useEffect, useState } from "react";
import { NavBar } from "../../components";
import "./GameDetails.styled.css";
import { useParams } from "react-router-dom";
import FreeToPlay from "../../api/FreeToPlay";
import { Link } from "react-router-dom";

import {
    Smiley,
    SmileyMeh,
    SmileySad,
    FolderSimplePlus,
    ArrowSquareOut,
    Star,
    Sparkle,
    User,
} from "phosphor-react";

function GameDetails() {
    const { id } = useParams();
    const [gameData, setGameData] = useState([]);

    const getGameData = async () => {
        const response = await FreeToPlay.get(`/game?id=${id}`);
        setGameData(response.data);
    };

    useEffect(() => {
        getGameData();
    }, []);

    console.log(gameData);

    const {
        thumbnail,
        description,
        title,
        game_url,
        publisher,
        minimum_system_requirements,
        developer,
        release_date,
        screenshots,
        genre,
        platform,
    } = gameData;

    return (
        <>
            <NavBar />
            <div className="game_details_content_container">
                <div className="game_details_content">
                    <img
                        className="game_content_image"
                        src={thumbnail}
                        alt="game"
                    />
                    <a
                        href={game_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="game_play_now"
                    >
                        {" "}
                        Play Now
                        <span>
                            <ArrowSquareOut
                                size={22}
                                color="#fbfdfe"
                                weight="bold"
                            />
                        </span>
                    </a>
                    <div className="game_reacts_container">
                        <div className="smile_button">
                            <Smiley size={28} color="#098b3b" />
                            <p>7</p>
                            <p>LIKE</p>
                        </div>
                        <div className="meh_button">
                            <SmileyMeh size={28} color="#ced4d0" />
                            <p>1</p>
                            <p>MEH</p>
                        </div>
                        <div className="sad_button">
                            <SmileySad size={28} color="#e21818" />
                            <p>3</p>
                            <p>DISLIKE</p>
                        </div>
                        <div className="add_library_button">
                            <FolderSimplePlus size={28} color="#18b0e2" />
                            <p>30</p>
                            ADD
                        </div>
                    </div>
                </div>
                <div className="game_details_main">
                    <div className="game_details_header">
                        <h1 className="game_details_title">Dark Orbit</h1>
                        <div className="text_container">
                            <Star size={18} color="#AAAAAA" weight="fill" />
                            <p>Mostly Positive</p>
                        </div>
                        <div className="text_container">
                            <Sparkle size={18} color="#AAAAAA" weight="fill" />
                            <p>7 Member Ratings</p>
                        </div>
                        <div className="text_container">
                            <User size={18} color="#AAAAAA" weight="fill" />
                            <p>222 Members have this game in their library!</p>
                        </div>
                        <p>0 Reviews</p>
                        <div className="text_container">
                            <p>
                                <span>100%</span>Popularity
                            </p>
                        </div>
                        <div className="game_rating_percent">100%</div>
                    </div>
                    <div className="game_details_description">
                        <h2>About {title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="game_details_info_container">
                        <h2>Additional Information</h2>
                        <div className="game_details_info">
                            <div>
                                <p>Title</p>
                                <p>{title}</p>
                            </div>
                            <div>
                                <p>Developer</p>
                                <p>{developer}</p>
                            </div>
                            <div>
                                <p>Publisher</p>
                                <p>{publisher}</p>
                            </div>
                            <div>
                                <p>Release Date</p>
                                <p>{release_date}</p>
                            </div>
                            <div>
                                <p>Genre</p>
                                <p>{genre}</p>
                            </div>
                            <div>
                                <p>Platform</p>
                                <p>{platform}</p>
                            </div>
                        </div>
                    </div>
                    {minimum_system_requirements && (
                        <div className="game_details_system_req_container">
                            <h2>Minimum System Requirements (Windows)</h2>
                            <div className="game_details_system_req">
                                <div>
                                    <div>
                                        <p>OS</p>
                                        <p>{minimum_system_requirements.os}</p>
                                    </div>
                                    <div>
                                        <p>Memory</p>
                                        <p>
                                            {minimum_system_requirements.memory}
                                        </p>
                                    </div>
                                    <div>
                                        <p>Storage</p>
                                        <p>
                                            {
                                                minimum_system_requirements.storage
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>Processor</p>
                                        <p>
                                            {
                                                minimum_system_requirements.processor
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <p>Graphics</p>
                                        <p>
                                            {
                                                minimum_system_requirements.graphics
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <p>Additional Notes</p>
                                        <p>
                                            Specifications may change during
                                            development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default GameDetails;
