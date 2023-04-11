import { Request, Response } from "express";
import { BlogPost } from "./interfaces";

let posts: BlogPost[] = [];

export const getAllPosts = async (req: Request, res: Response) => {
  res.json(posts);
};

export const createNewPost = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const timestamp = Date.now();
  const id = Math.floor(Math.random() * 1000000).toString();
  const newPost: BlogPost = { id, title, body, timestamp };
  posts.push(newPost);
  res.status(201).json(newPost);
};

export const getOnePostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    res.status(404).json({ error: "Post not found" });
  } else {
    res.json(post);
  }
};
