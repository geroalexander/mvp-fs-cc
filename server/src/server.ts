import express from "express";

const app = express();
const router = express.Router();

// Middleware
app.use(express.json());

// Routes
app.use("/", router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
