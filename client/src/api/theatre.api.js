import { SHOW_DETAIL, SHOWS_LIST } from "../utils/constants";
import axiosInstance from "./index";

export const ShowList = async (value) => {
  try {
    const response = await axiosInstance.get(SHOWS_LIST, {
      params: {
        //   date: value.date,
        //   movie: value.movieId,
        movie: "6673462ca13efe32c1bb41c2",
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const ShowDetail = async (showId) => {
  try {
    const response = await axiosInstance.get(SHOW_DETAIL + showId);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
