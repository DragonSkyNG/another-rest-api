import express from "express";
import {
  createDog,
  deleteDogById,
  getAllDogs,
  getDogById,
  updateDogById,
} from "../controllers/dogController";
const router = express.Router();

router.post("/create", createDog);
router.get("/get", getAllDogs);
router.get("/get/:id", getDogById);
router.post("/update/:id", updateDogById);
router.post("/delete/:id", deleteDogById);

export default router;
