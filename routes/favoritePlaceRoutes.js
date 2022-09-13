import express from "express";
import {
  createFavoritePlace,
  deleteFavoritePlaceById,
  getAllFavoritePlaces,
  getFavoritePlaceById,
  updateFavoritePlaceById,
  getAllAnimals
} from "../controllers/favoritePlaceController.js";
const router = express.Router();

router.post("/create", createFavoritePlace);
router.get("/get", getAllFavoritePlaces);
router.get("/get/:id", getFavoritePlaceById);
router.put("/update/:id", updateFavoritePlaceById);
router.delete("/delete/:id", deleteFavoritePlaceById);
router.get("/get/place/:name",getAllAnimals)

export default router;
