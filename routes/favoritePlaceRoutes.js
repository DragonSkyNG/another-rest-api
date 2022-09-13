import express from "express";
import {
  createFavoritePlace,
  deleteFavoritePlaceById,
  getAllFavoritePlaces,
  getFavoritePlaceById,
  updateFavoritePlaceById,
} from "../controllers/favoritePlaceController.js";
const router = express.Router();

router.post("/create", createFavoritePlace);
router.get("/get", getAllFavoritePlaces);
router.get("/get/:id", getFavoritePlaceById);
router.put("/update/:id", updateFavoritePlaceById);
router.delete("/delete/:id", deleteFavoritePlaceById);

export default router;
