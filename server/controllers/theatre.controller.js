import Theatre from "../models/theatre.model.js";

export const createTheatre = async (req, res) => {
  try {
    const theatreObj = req.body;
    const theatre = await Theatre.create(theatreObj);
    res
      .status(200)
      .json({ success: true, message: "Theatre Created...", data: theatre });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
