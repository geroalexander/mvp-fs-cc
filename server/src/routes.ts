import express, { Request, Response } from "express";
import { BlogPost } from "./interfaces";

const router = express.Router();
let posts: BlogPost[] = [];

// Create a new blog post
router.post("/posts", (req: Request, res: Response) => {
  const { title, body } = req.body;
  const timestamp = Date.now();
  const id = Math.floor(Math.random() * 1000000).toString();
  const post: BlogPost = { id, title, body, timestamp };
  posts.push(post);
  res.status(201).json(post);
});

// Retrieve all blog posts
router.get("/posts", (req: Request, res: Response) => {
  res.json(posts);
});

// Retrieve a single blog post by ID
router.get("/posts/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({ error: "Post not found" });
  } else {
    res.json(post);
  }
});

module.exports = router;
