require("express-async-errors");
const express = require("express");

require("dotenv").config();
const mongoose = require("mongoose");
const AddMovie = require("./controllers/AddMovie");
const getALLMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const updateMovie = require("./controllers/updateMovie");
const deletMovie = require("./controllers/deletMovie");
const moviesRecommendations = require("./controllers/moviesRecommendations");
const errorHandler = require("./handlers/errorHandler");
mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("connected to mongo");
  })
  .catch(() => {
    console.error("Error connecting to MongoDB Atlas...");
  });

const app = express();

app.use(express.json());
//models..
require("./models/movies.model");
// Routes
app.post("/api/movies", AddMovie);
app.get("/api/movies", getALLMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", updateMovie);
app.delete("/api/movies/:movie_id", deletMovie);

// openai
app.get("/api/movies/openai/moviesrecommendation", moviesRecommendations);
app.use(errorHandler);
app.listen(8000, () => {
  console.log("server started successfully");
});
