import { Schema, model } from "mongoose";

const ShowSchema = Schema({
  language: {
    type: String,
  },
  datetime: {
    type: Date,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "movie",
    required: true,
  },
  theater: {
    type: Schema.Types.ObjectId,
    ref: "theatre",
    required: true,
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
    },
  ],
  totalSseats: {
    type: Number,
  },
  availableSeats: {
    type: Number,
  },
});

const Show = model("show", ShowSchema);

export default Show;
