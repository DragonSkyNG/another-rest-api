import dogModel from "../models/dogModel.js";

export const createDog = async (req, res) => {
  try {
    const dog = new dogModel({ ...req.body });
    await dog.save();
    res.status(201).send("Successfully create new dog");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getAllDogs = async (req, res) => {
  try {
    const dog = await dogModel.find();
    res.send(200).json(dog);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getDogById = async (req, res) => {
  try {
    const dog = await dogModel.findOne({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).json(dog);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updateDogById = async (req, res) => {
  try {
    const dog = await dogModel.findOneAndUpdate(
      {
        $or: [{ _id: req.params.id }, { name: req.params.id }],
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(dog);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const deleteDogById = async (req, res) => {
  try {
    await dogModel.findOneAndDelete({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).send("Successfully deleted entry");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
