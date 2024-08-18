import Movie from "../models/movie.model.js";
import Theatre from "../models/theatre.model.js";

export const createMovie = async (movieData) => {
  try {
    const response = await fetch("http://localhost:3000/api/movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    });
    const data = await response.json();
    console.log("Movie created:", data);
  } catch (error) {
    console.error("Error creating movie:", error.message);
  }
};

export const creatMovieOnDb = async (movieData) => {
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
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
