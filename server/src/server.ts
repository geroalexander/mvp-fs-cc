import express, { Request, Response } from "express";
import cors from "cors";
import { createNewPost, getAllPosts, getOnePostById } from "./controller";

const app = express();
const router = express.Router();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
router.get("/posts", getAllPosts);
router.get("/posts/:id", getOnePostById);
router.post("/posts/new", createNewPost);

app.use(router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
