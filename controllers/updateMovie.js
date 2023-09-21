const mongoose = require("mongoose");

const updateMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_id, movie_name, rating, info, year } = req.body;

  try {
    if (!movie_id) throw "movie id is required";
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      data: e,
    });
    return;
  }

  await moviesModel.updateOne(
    { _id: movie_id },
    { movie_name: movie_name, rating: rating, info: info, year: year },
    { runValidators: true }
  );

  res.status(200).json({
    status: "hello from update route",
  });
};
module.exports = updateMovie;
