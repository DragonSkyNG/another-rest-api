import express from "express";
import {
  createFavoritePlace,
  deleteFavoritePlaceById,
  getAllFavoritePlaces,
  getFavoritePlaceById,
  updateFavoritePlaceById,
} from "../controllers/favoritePlaceController";
const router = express.Router();

router.post("/create", createFavoritePlace);
router.get("/get", getAllFavoritePlaces);
router.get("/get/:id", getFavoritePlaceById);
router.post("/update/:id", updateFavoritePlaceById);
router.post("/delete/:id", deleteFavoritePlaceById);

export default router;
