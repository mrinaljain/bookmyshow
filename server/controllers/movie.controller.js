import Movie from "../models/movie.model.js";
import Theatre from "../models/theatre.model.js";
export const createMovie = async function (req, res) {
  //get data from request body
  // creae new document in movie database
  const movieData = req.body;

  try {
    //?Theatre Logic
    //check if theatre is already present
    let theatre = await Theatre.findOne({ name: movieData.theatre?.name });
    // if no then create theatre and pick id
    if (!theatre) {
      theatre = await Theatre.create(movieData.theatre);
    }
    // if yes pick the id and add it to DB
    //?Theatre Logic
    const response = await Movie.create({
      ...movieData,
      theatre: theatre._id,
    });
    res.status(200).send({
      status: "success",
      message: "Movie created successfully",
      data: response,
    });
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


//TODO: ALL UPCOMING LIVE filters in all api
//TODO: search with title 