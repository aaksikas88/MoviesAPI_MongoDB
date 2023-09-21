const mongoose = require("mongoose");

const AddMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_name, info, rating, year } = req.body;

  // Validation

  if (!info) throw "info is required";
  if (!rating) throw "rating is required";
  if (+rating < 1 || +rating > 10) throw "rating must be between 1 and 10";

  const creatMovies = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    year: year,
  });

  res.status(200).json({
    status: "This is a add movie route",
    message: "the movie added successfully",
  });
};
module.exports = AddMovie;
