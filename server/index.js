const express = require("express")

const app = express();

const db = require("../db.json");

const seasons = {};

const cars = []

db.seasons.forEach(season => {
    seasons[season.season] = {}

    if (season.episodes.length > 0) {
        seasons[season.season] = {
            started: season.episodes[0].uploaded,
            ended: season.episodes[season.episodes.length - 1].uploaded,
            episodes: {}
        }
    } else {
        seasons[season.season] = {
            started: "unknown",
            ended: "ongoing",
            episodes: {}
        }
    }


    season.episodes.forEach(episode => {
        console.log(season.season, episode.episode)
        seasons[season.season].episodes[episode.episode] = {
            title: episode.title,
            uploaded: episode.uploaded,
            link: episode.link,
            cars: episode.cars
        }

        episode.cars.forEach(car => {
            cars.push(car);
        })
    })

    console.log(season.season, season.episodes.length);


})

console.log(cars);
console.log(seasons);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/home.html")
})

app.get(`/seasons/`, (req, res) => {
    res.sendFile(__dirname + "/pages/seasons_all.html")
})

app.get(`/leaderboard/`, (req, res) => {
    res.sendFile(__dirname + "/pages/leaderboard.html")
})

app.get(`/vehicles/`, (req, res) => {
    res.sendFile(__dirname + "/pages/vehicles.html")
})

app.get(`/seasons/:season_id`, (req, res) => {
    console.log(req.params)
})

app.use("/static", express.static(__dirname + "/static"));

app.listen(3000, (e) => {
    if (e !== undefined) {
        console.error(e);
    } else {
        console.log("listening on port 3000");
    }
})




