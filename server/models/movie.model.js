import { Schema, model } from "mongoose";


const MovieSchema = Schema({
  movieId: {
    type: Number,
    required: true,
    unique: true,
  },
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

    default:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAxNy42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-fchlbmjvwh-portrait.jpg",
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
    enum: ["English", "Hindi", "Telugu"],
  },
  theatre: {
    type: Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
  },
});

const Movie = model("movie", MovieSchema);

export default Movie;
