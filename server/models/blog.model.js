import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  blogId: {
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
  createdOn: {
    type: Date,
  },
  author: {
    type: String,
  },
});

const Blog = model("Blog", blogSchema);

export default Blog;
