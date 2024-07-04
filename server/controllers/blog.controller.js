import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
  try {
    const blogData = new Blog(req.body);
    await blogData.save();

    res.status(201).json({ success: true, message: "Created", data: blogData });
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
export const renderBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.render("bloglist.ejs", { blogs });
  } catch (error) {
    console.log(error.message);
  }
};
