import catModel from "../models/catModel.js";

export const createCat = async (req, res) => {
  try {
    const cat = new catModel({ ...req.body });
    await cat.save();
    res.status(201).send("Successfully create new cat");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getAllCats = async (req, res) => {
  try {
    const cats = await catModel.find();
    res.send(200).json(cats);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getCatById = async (req, res) => {
  try {
    const cat = await catModel.findOne({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).json(cat);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updateCatById = async (req, res) => {
  try {
    const cat = await catModel.findOneAndUpdate(
      {
        $or: [{ _id: req.params.id }, { name: req.params.id }],
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(cat);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const deleteCatById = async (req, res) => {
  try {
    await catModel.findOneAndDelete({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).send("Successfully deleted entry");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
