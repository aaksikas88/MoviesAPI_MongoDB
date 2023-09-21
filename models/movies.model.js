const mongoose = require("mongoose");
const moviesShema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: [true, " Please provide the name of the movie"],
  },
  info: {
    type: String,
  },
  rating: {
    type: Number,
  },
  year: Number,
});

const moviesModel = mongoose.model("movies", moviesShema);
module.exports = moviesModel;
