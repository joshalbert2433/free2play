import Axios from "axios";
// import Env from "dotenv"
// since this particular API doesn't require you to be authenticated, then all we need to specify is the base url
// of the api. Other APIs will require you to add headers, auth methods, etc.
export default Axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    // withCredentials: false,
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    // proxy: {
    //     host: "Localhost",
    //     port: 3000,
    // },
});
