import express from "express";
import { createNewPost, getAllPosts, getOnePostById } from "./controller";

const router = express.Router();

// Create a new blog post
router.post("/posts/new", createNewPost);

// Retrieve all blog posts
router.get("/posts", getAllPosts);

// Retrieve a single blog post by ID
router.get("/posts/:id", getOnePostById);

module.exports = router;
