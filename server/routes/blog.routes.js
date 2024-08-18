import express from "express";
import {
  createBlog,
  getBlog,
  getBlogList,
  patchBlog,
  putBlog,
  removeBlog,
  renderBlogs,
} from "../controllers/blog.controller.js";
import blogchecker from "../middlewares/blogchecker.js";

const blogRouter = express.Router();

blogRouter.get("/list", blogchecker, getBlogList);
blogRouter.post("/", createBlog);
blogRouter.get("/:id", getBlog);
blogRouter.patch("/:id", patchBlog);
blogRouter.put("/:id", putBlog);
blogRouter.delete("/:id", removeBlog);
blogRouter.get("/", renderBlogs);

export default blogRouter;
