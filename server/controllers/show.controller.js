// createShow  => /   post
// listShows  => /list  get

import Show from "../models/show.model.js";

export const createShow = async function (req, res) {
  const showDetails = req.body;
  try {
    const response = await Show.create(showDetails);
    res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const listShows = async function (req, res) {
  const movieId = req.query.movie;
  try {
    const response = await Show.find({ movie: movieId });
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// TODO: solve isue with show list API
//TODO: give shows as per current date  passed in querry params

//todo create shodetail function API