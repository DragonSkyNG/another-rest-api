import express from "express";
import {
  createBird,
  deleteBirdById,
  getAllBirds,
  getBirdById,
  updateBirdById,
} from "../controllers/birdController.js";
const router = express.Router();

router.post("/create", createBird);
router.get("/get", getAllBirds);
router.get("/get/:id", getBirdById);
router.post("/update/:id", updateBirdById);
router.post("/delete/:id", deleteBirdById);

export default router;
