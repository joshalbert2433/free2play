import Axios from "axios";
// since this particular API doesn't require you to be authenticated, then all we need to specify is the base url
// of the api. Other APIs will require you to add headers, auth methods, etc.
export default Axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    // withCredentials: false,
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "8f46a96aa3msh5d0ab5bbff68b75p19b300jsn2e4f33829896",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    // proxy: {
    //     host: "Localhost",
    //     port: 3000,
    // },
});
