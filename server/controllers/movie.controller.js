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
      success: true,
      message: "Movie created successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getMovies = async function (req, res) {
  try {
    // Get the current date
    const currentDate = new Date();
    const filter = { releaseDate: { $gt: currentDate } };
    const response = await Movie.find();
    res
      .status(200)
      .send({ success: true, message: "Movie List ", data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getMovieDetail = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findOne({ movieId: movieId });
    if (movie) {
      res
        .status(200)
        .send({ success: true, message: "Movie found", data: movie });
    } else {
      res.status(404).send({
        success: false,
        message: "Movie Not Found with id " + movieId,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findOneAndUpdate({ movieId: movieId }, req.body);
    if (movie) {
      res
        .status(200)
        .send({ success: true, message: "Updated Successfully", data: movie });
    } else {
      res.status(404).send({
        success: false,
        message: "Unable to update " + movieId,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findOneAndDelete({ movieId: movieId });
    if (movie) {
      res
        .status(200)
        .send({ success: true, message: "Deleted Successfully", data: movie });
    } else {
      res.status(404).send({
        success: false,
        message: "Movie Not Found with id " + movieId,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};



// TODOMAX: ALL UPCOMING LIVE filters in all api