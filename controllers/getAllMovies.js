const mongoose = require("mongoose");
const getALLMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const moviesData = await moviesModel.find({});
  res.status(200).json({
    status: "success",
    data: moviesData,
  });
};
module.exports = getALLMovies;
