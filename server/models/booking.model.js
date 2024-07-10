import { Schema, model } from "monngoose";

const BookingSchema = Schema({
  showId: {
    type: Schema.Types.ObjectId,
    ref: "show",
  },
  seats: [
    {
      type: String,
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  transactionId: {
    type: String,
  },
});

const Booking = model("booking", BookingSchema);

export default Booking;
