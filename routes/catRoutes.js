import express from "express";
import {
  createCat,
  deleteCatById,
  getAllCats,
  getCatById,
  updateCatById,
} from "../controllers/catController";
const router = express.Router();

router.post("/create", createCat);
router.get("/get", getAllCats);
router.get("/get/:id", getCatById);
router.post("/update/:id", updateCatById);
router.post("/delete/:id", deleteCatById);

export default router;
