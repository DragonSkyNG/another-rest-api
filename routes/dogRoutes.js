import express from "express";
import {
  createDog,
  deleteDogById,
  getAllDogs,
  getDogById,
  updateDogById,
} from "../controllers/dogController.js";
const router = express.Router();

router.post("/create", createDog);
router.get("/get", getAllDogs);
router.get("/get/:id", getDogById);
router.put("/update/:id", updateDogById);
router.delete("/delete/:id", deleteDogById);

export default router;
