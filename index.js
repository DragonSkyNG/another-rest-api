import express from "express";
import dotenv from "dotenv";
import connectionToMongo from "./utils/connection.js";
import birdRoutes from "./routes/birdRoutes.js";
import catRoutes from "./routes/catRoutes.js";
import dogRoutes from "./routes/dogRoutes.js";
import favoritePlaceRoutes from "./routes/favoritePlaceRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/bird", birdRoutes);
app.use("/cat", catRoutes);
app.use("/dog", dogRoutes);
app.use("/favoriteplace", favoritePlaceRoutes);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Server listens on port: ${port}`);
});
