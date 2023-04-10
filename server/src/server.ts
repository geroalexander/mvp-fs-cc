import express, { Request, Response } from "express";
import { BlogPost } from "./interfaces";

const app = express();

// Middleware
app.use(express.json());

// Routes
let posts: BlogPost[] = [];

// Create a new blog post
app.post("/posts", (req: Request, res: Response) => {
  const { title, body } = req.body;
  const timestamp = Date.now();
  const id = Math.floor(Math.random() * 1000000).toString();
  const post: BlogPost = { id, title, body, timestamp };
  posts.push(post);
  res.status(201).json(post);
});

// Retrieve all blog posts
app.get("/posts", (req: Request, res: Response) => {
  res.json(posts);
});

// Retrieve a single blog post by ID
app.get("/posts/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({ error: "Post not found" });
  } else {
    res.json(post);
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
