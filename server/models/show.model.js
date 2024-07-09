import { Schema, model } from "mongoose";

const ShowSchema = Schema({
  datetime: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "movie",
    required: true,
  },
  theatre: {
    type: Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
  },
  totalSeats: {
    type: Number,
  },
  availableSeats: {
    type: Number,
  },
  seats: [
    {
      category: {
        type: String,
      },
      price: {
        type: Number,
      },
      arrangement: [
        [
          {
            seatNumber: {
              type: String,
            },
            status: {
              type: String,
              enum: ["AVAILABLE", "BOOKED", "BLOCKED"],
              default: "AVAILABLE",
            },
          },
        ],
      ],
    },
  ],
});

const Show = model("show", ShowSchema);

export default Show;
