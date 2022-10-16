import React from "react";
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import GameDetails from "./pages/GameDetails/GameDetails";
import UserProfile from "./pages/UserProfile/UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Browse" element={<Browse />}></Route>
                <Route
                    exact
                    path="/GameDetails/:id"
                    element={<GameDetails />}
                ></Route>
                <Route
                    exact
                    path="/UserProfile"
                    element={<UserProfile />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
