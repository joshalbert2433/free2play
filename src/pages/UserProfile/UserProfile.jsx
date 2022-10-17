import React from "react";
import { NavBar } from "../../components";
import "./UserProfile.styled.css";

function UserProfile() {
    return (
        <>
            <NavBar />
            <div className="user_profile_main_container">
                <div className="user_background">
                    <video autoPlay muted loop>
                        <source
                            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1203420/96bacf40b7534eac4ee56d9a033c7498e2246d8f.webm"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="main_content">
                    <div className="user_profile_header">
                        <div className="user_profile_header_main">
                            <div className="user_profile_avatar">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQFHdizWdbxABWjw44J3pYrVTqNDJJXexOrz2ST7Hn6goDdAN515-Qbaf93Hs1N_UKFo&usqp=CAU"
                                    alt="game"
                                />
                            </div>
                            <div className="user_profile_details">
                                <h2>Azusa</h2>
                                <p>Philippines</p>
                                <p className="user_profile_summary">
                                    Human kind can not gain anything without
                                    first giving something in return. To obtain
                                    something of equal value must be lost. That
                                    is Alchemy's first law of equivalent
                                    exchange.
                                </p>
                            </div>
                        </div>
                        <div className="user_profile_header_sub">
                            <div className="level_container">
                                <p>Level</p>
                                <span className="level_circle">30</span>
                            </div>
                            <div className="badge_container">
                                <img
                                    src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/570/5bb3c8562e9aa9012d8684087ef4c7db993f3f31.png"
                                    alt="badge"
                                />
                                <div>
                                    <p>Support</p>
                                    <p>100 XP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user_profile_content">
                        <div className="user_profile_content_main">
                            <div className="user_profile_content_header">
                                <h2>Artwork Showcase</h2>
                                <button
                                    onClick={() => {
                                        alert("Di pa po gawa :)");
                                    }}
                                >
                                    Upload Artwork
                                </button>
                            </div>
                            <div className="user_profile_artwork">
                                <div className="content">
                                    <p className="title">My Artwork</p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Corrupti, illo?
                                    </p>
                                </div>
                                <img
                                    className="artwork_image"
                                    src="https://static.gosugamers.net/b7/96/6e/0f73436a75085010087447213ca48a1176a9bd285a798488ba1d169f00.jpg?w=840"
                                    alt="game"
                                />
                            </div>
                        </div>
                        <div className="user_profile_content_sub">
                            <div className="sub_container">
                                <h3 className="sub_title">Currently Online</h3>
                                <div className="account_link">
                                    <p>Library </p>
                                    <p>Badges</p>
                                    <p>Reviews</p>
                                    <p>Artwork</p>
                                </div>
                                <div className="friends_container">
                                    <h3>Friends 12</h3>
                                    <div className="friend_card">
                                        <img
                                            src="https://avatars.akamai.steamstatic.com/b223f6c7f99f768849d86de3d24ab34df38c35df_medium.jpg"
                                            alt="avatar"
                                        />
                                        <p>Juswa</p>
                                        <p className="level_float">24</p>
                                    </div>
                                    <div className="friend_card">
                                        <img
                                            src="https://avatars.akamai.steamstatic.com/79cbc9fa0bc03f0ebe2eb853b488b8fba431bff8_medium.jpg"
                                            alt="avatar"
                                        />
                                        <p>Albert</p>
                                        <p className="level_float">24</p>
                                    </div>
                                    <div className="friend_card">
                                        <img
                                            src="https://avatars.akamai.steamstatic.com/934e81f17c01f152081b00c8f736deef93d27fb1_medium.jpg"
                                            alt="avatar"
                                        />
                                        <p>Villanueva</p>
                                        <p className="level_float">24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side_content"></div>
            </div>
        </>
    );
}

export default UserProfile;
