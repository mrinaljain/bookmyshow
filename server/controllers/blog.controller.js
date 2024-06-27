// get blog list (get)
// get single blog (get)
// create blog (post)
// update title  (patch)
// replace an element with certain id (put)
// remove a blog (delete)

import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const createdBlog = await Blog.create(blogData);
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const searchedBlog = await Blog.findOne({ id: blogId });
    res.status(200).json(searchedBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getBlogList = async (req, res) => {
  try {
    const searchedBlogList = await Blog.find({});
    res.status(200).json(searchedBlogList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update certain element of a document
export const patchBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const query = { id: blogId };
    const update = req.body;
    const updatedBlog = await Blog.findOneAndUpdate(query, update);
    res.status(200).send(updatedBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Replace whole document
export const putBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const query = { id: blogId };
    const update = req.body;
    const updatedBlog = await Blog.findOneAndReplace(query, update);
    res.status(200).send(updatedBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Remove an whole document
export const removeBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findOneAndDelete({ id: blogId });
    res.status(200).send(deletedBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
