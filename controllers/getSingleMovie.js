const mongoose = require("mongoose");
const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const moviesData = await moviesModel.findOne({
    _id: req.params.movie_id,
  });

  res.status(200).json({
    status: "Hello from get single movie",
    data: moviesData,
  });
};
module.exports = getSingleMovie;
