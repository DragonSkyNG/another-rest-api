import express from "express";
import dotenv from "dotenv";
import connectionToMongo from "./utils/connection.js";

const app = express();
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectionToMongo();
  console.log(`Server listens on port: ${port}`);
});
