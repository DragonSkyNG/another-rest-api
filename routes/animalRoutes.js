import express from "express";
import {
  createAnimal,
  getAnimals,
  getAnimalById,
  updateAnimal,
  deleteAnimal,
} from "../controllers/animalController.js";

const router = express.Router();

router.post("/:animal/create", createAnimal);
router.get("/:animal/get", getAnimals);
router.get("/:animal/get/:id", getAnimalById);
router.put("/:animal/update/:id", updateAnimal);
router.delete("/:animal/delete/:id", deleteAnimal);

export default router;
