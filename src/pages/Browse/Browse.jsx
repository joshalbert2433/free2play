import React, { useState, useEffect } from "react";
import { NavBar } from "../../components";
import "../Browse/Browse.styled.css";
import { BrowseCard } from "../../components";
import FreeToPlay from "../../api/FreeToPlay";

function Browse() {
    const [gameData, setGameData] = useState([]);
    const [gameFilter, setGameFilter] = useState({
        platform: "all",
        tag: "all",
        sortBy: "relevance",
    });

    const getGameData = async () => {
        const response = await FreeToPlay.get("/games");
        setGameData(response.data);
    };

    const getFilterGameData = async () => {
        const { platform, tag, sortBy } = gameFilter;
        let response;
        if (tag !== "all") {
            response = await FreeToPlay.get(
                `/games?platform=${platform}&category=${tag}&sort-by=${sortBy}`
            );
        } else {
            response = await FreeToPlay.get(
                `/games?platform=${platform}&tag=${tag}&sort-by=${sortBy}`
            );
        }

        setGameData(response.data);
    };

    useEffect(() => {
        getGameData();
    }, []);

    useEffect(() => {
        getFilterGameData();
        //eslint-disable-next-line
    }, [gameFilter]);

    const handleOnChange = (target) => {
        console.log(target.name, target.value);
        setGameFilter((prev) => ({ ...prev, [target.name]: target.value }));
        console.log(gameFilter);
    };

    console.log(gameData);

    return (
        <>
            <NavBar />
            <div className="browse_content_container">
                <form className="browse_filter_container">
                    <div className="browse_platform">
                        <label htmlFor="platform">Platform: </label>
                        <select
                            name="platform"
                            id="platform"
                            onChange={(event) => handleOnChange(event.target)}
                        >
                            <option value="all">All Platforms</option>
                            <option value="pc">Windows (PC)</option>
                            <option value="browser">Browser (web)</option>
                        </select>
                    </div>
                    <div className="browse_genre">
                        <label htmlFor="tag">Genre/Tag: </label>
                        <select
                            name="tag"
                            id="tag"
                            onChange={(event) => handleOnChange(event.target)}
                        >
                            <option value="all">All Genre</option>
                            <option value="mmo">MMO</option>
                            <option value="mmorpg">MMORPG</option>
                            <option value="shooter">Shooter</option>
                        </select>
                    </div>
                    <div className="browse_sort">
                        <label htmlFor="sortBy">Sort By: </label>
                        <select
                            name="sortBy"
                            id="sortBy"
                            onChange={(event) => handleOnChange(event.target)}
                        >
                            <option value="relevance">Relevance</option>
                            <option value="popularity">Popularity</option>
                            <option value="release-date">Release Date</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </div>
                </form>
                <div className="browse_content">
                    <div className="browse_card_container">
                        {gameData.map((data) => {
                            return (
                                <BrowseCard
                                    key={data.id}
                                    id={data.id}
                                    title={data.title}
                                    thumbnail={data.thumbnail}
                                    short_description={data.short_description}
                                    genre={data.genre}
                                    platform={data.platform}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Browse;
