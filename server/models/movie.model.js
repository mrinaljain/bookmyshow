import { Schema, model } from "mongoose";

const MovieSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  bannerImage: {
    type: String,
  },
  trailerVideo: {
    type: String,
  },
  cast: [
    {
      name: {
        type: String,
      },
      image: {
        type: String,
      },
    },
  ],
  rating: {
    type: Number,
  },
  duration: {
    type: Number, // in minutes
  },
  genre: {
    type: String,
    enum: ["Drama", "Thriller", "Horror", "Fiction"],
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
    enum: ["English", "Hindi"],
  },
});

const Movie = model("Movie", MovieSchema);

export default Movie;
