import express from "express";
import {
  createCat,
  deleteCatById,
  getAllCats,
  getCatById,
  updateCatById,
} from "../controllers/catController.js";
const router = express.Router();

router.post("/create", createCat);
router.get("/get", getAllCats);
router.get("/get/:id", getCatById);
router.put("/update/:id", updateCatById);
router.delete("/delete/:id", deleteCatById);

export default router;
