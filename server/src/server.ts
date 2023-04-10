import express, { Request, Response } from "express";
import { BlogPost } from "./interfaces";

const app = express();

// Middleware
app.use(express.json());

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
