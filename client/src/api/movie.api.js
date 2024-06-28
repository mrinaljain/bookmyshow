import { DELETE_MOVIE, MOVIES_LIST, MOVIE_DETAIL } from "../utils/constants";
import axiosInstance from "./index.js";

export const MovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(MOVIE_DETAIL + movieId);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const MovieList = async () => {
  try {
    const response = await axiosInstance.get(MOVIES_LIST);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.delete(DELETE_MOVIE + movieId);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

// TODO;//  update movie flow
