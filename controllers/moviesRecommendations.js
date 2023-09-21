const OpenAI = require("openai");
const mongoose = require("mongoose");

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_APIKEY, // defaults to process.env["OPENAI_API_KEY"]
});

const moviesRecommendations = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const allMovies = await moviesModel.find({});
  const stringMovies = allMovies.map((el) => el.movie_name).join(",");

  const prompt = ` I need the year and flag country of  these movies:${stringMovies}  `;
  console.log(prompt);

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  res.status(200).json({
    status: "success",
    Suggestions: completion.choices[0].message.content,
  });
};
module.exports = moviesRecommendations;
