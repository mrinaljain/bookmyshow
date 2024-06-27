import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Blog = model("Blog", blogSchema);

export default Blog;
