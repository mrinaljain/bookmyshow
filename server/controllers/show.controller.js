// createShow  => /   post
// listShows  => /list  get

import mongoose from "mongoose";
import Show from "../models/show.model.js";

export const createShow = async function (req, res) {
  const showDetails = req.body;
  try {
    const response = await Show.create(showDetails);
    res.status(200).json({ message: "Show Created", data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const listShows = async function (req, res) {
  const movieId = req.query.movie;
  // const filterdate = req.query.date || new Date();
  try {
    const response = await Show.aggregate([
      {
        $match: {
          movie: new mongoose.Types.ObjectId(movieId),
        },
      },
      // {
      //   $match: {
      //     datetime: {
      //       $gte: new Date(`${filterdate}T00:00:00.000Z`),
      //       $lt: new Date(`${filterdate}T23:59:59.999Z`),
      //     },
      //   },
      // },
      {
        $group: {
          _id: "$theatre",
          shows: {
            $push: "$$ROOT",
          },
        },
      },
    ])
      .exec()
      .then((movies) => {
        console.log(movies);
      })
      .catch((err) => {
        console.error(err);
      });
    res
      .status(200)
      .json({ success: true, message: "Shows Found", data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const showDetail = async (req, res) => {
  const showId = req.params.showId;
  try {
    const showDetail = await Show.findById(showId);
    res.status(200).json({
      success: true,
      message: "Show Details Found",
      data: showDetail,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};