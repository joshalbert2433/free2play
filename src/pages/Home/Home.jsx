import React from "react";
import { NavBar } from "../../components";
import "./Home.styled.css";
import { WindowsLogo } from "phosphor-react";

function Home() {
    return (
        <>
            <NavBar />
            <section className="home_header"></section>
            <section className="home_content">
                <div className="home_game_container">
                    <h2>Recently Added</h2>
                    <div className="home_game">
                        <div className="home_card_container">
                            <img
                                className="home_game_thumbnail"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1662588548"
                                alt="game"
                            />
                            <div className="home_game_details">
                                <a href="/" className="home_game_title">
                                    Dota 2
                                </a>
                                <p className="home_game_description">
                                    A hero-focused first-person team shooter
                                    from Blizzard Entertainment.
                                </p>
                                <div className="home_game_tags">
                                    <span>shooter</span>
                                </div>
                            </div>
                            <div className="home_game_platform">
                                <WindowsLogo size={32} />
                            </div>
                        </div>
                        <div className="home_card_container">
                            <img
                                className="home_game_thumbnail"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1662588548"
                                alt="game"
                            />
                            <div className="home_game_details">
                                <a href="/" className="home_game_title">
                                    Dota 2
                                </a>
                                <p className="home_game_description">
                                    A hero-focused first-person team shooter
                                    from Blizzard Entertainment.
                                </p>
                                <div className="home_game_tags">
                                    <span>shooter</span>
                                </div>
                            </div>
                            <div className="home_game_platform">
                                <WindowsLogo size={32} />
                            </div>
                        </div>
                        <div className="home_card_container">
                            <img
                                className="home_game_thumbnail"
                                src="https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1662588548"
                                alt="game"
                            />
                            <div className="home_game_details">
                                <a href="/" className="home_game_title">
                                    Dota 2
                                </a>
                                <p className="home_game_description">
                                    A hero-focused first-person team shooter
                                    from Blizzard Entertainment.
                                </p>
                                <div className="home_game_tags">
                                    <span>shooter</span>
                                </div>
                            </div>
                            <div className="home_game_platform">
                                <WindowsLogo size={32} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="most_played_container">
                    <h2>Most Played</h2>
                    <div className="most_played_card">
                        <img
                            className="most_played_image"
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg"
                            alt="game"
                        />
                        <img
                            className="most_played_image"
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg"
                            alt="game"
                        />
                        <img
                            className="most_played_image"
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg"
                            alt="game"
                        />
                        <img
                            className="most_played_image"
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg"
                            alt="game"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
