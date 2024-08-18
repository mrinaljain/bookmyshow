import { Schema, model } from "mongoose";

const TheatreSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Theatre = model("theatre", TheatreSchema);

export default Theatre;
