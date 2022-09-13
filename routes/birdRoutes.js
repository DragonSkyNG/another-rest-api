import express from "express";
const router = express.Router();

router.post("/create");
router.get("/get");
router.get("/get/:id");
router.post("/update/:id");
router.post("/delete");
router.post("/delete/:id");

export default router;
