import Movie from "../models/movie.model.js";

export const createMovie = async function (req, res) {
  //get data from request body
  // creae new document in movie database
  const movieData = req.body;
  try {
    const response = await Movie.create(movieData);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getMovies = async function (req, res) {
  try {
    const response = await Movie.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
