import React, { useEffect, useState } from "react";
import { NavBar } from "../../components";
import "./Home.styled.css";
import { HomeCard, MostPlayedCard } from "../../components";
import FreeToPlay from "../../api/FreeToPlay";

function Home() {
    const [gameData, setGameData] = useState([]);
    const [mostPlayed, setMostPlayed] = useState([]);

    useEffect(() => {
        getGameData();
        getMostPlayed();
    }, []);
    const getGameData = async () => {
        const response = await FreeToPlay.get("/games?sort-by=release-date");
        setGameData(response.data);
    };

    const getMostPlayed = async () => {
        const response = await FreeToPlay.get("/games?sort-by=popularity");
        setMostPlayed(response.data);
    };

    return (
        <>
            <NavBar />
            <section className="home_header"></section>
            <section className="home_content">
                <div className="home_game_container">
                    <h2>Recently Added</h2>
                    <div className="home_game">
                        {gameData.slice(0, 10).map((data, index) => {
                            return <HomeCard key={index} data={data} />;
                        })}
                    </div>
                </div>
                <div className="most_played_container">
                    <h2>Most Played</h2>
                    <div className="most_played_card">
                        {mostPlayed.slice(0, 7).map((data, index) => {
                            return <MostPlayedCard key={index} data={data} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
