const mongoose = require("mongoose");
const deletMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const _id = req.params.movie_id;
  const getMovie = await moviesModel.findOne({
    _id: _id,
  });

  if (!getMovie) throw "this movie does not exist";

  await moviesModel.deleteOne({
    _id: _id,
  });

  res.status(200).json({
    status: "success",
    message: "the movie was removed succesfully",
  });
};
module.exports = deletMovie;
