import birdModel from "../models/birdModel.js";

export const createBird = async (req, res) => {
  try {
    const bird = new birdModel({ ...req.body });
    await bird.save();
    res.status(201).send("Successfully create new bird");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getAllBirds = async (req, res) => {
  try {
    const birds = await birdModel.find();
    res.send(200).json(birds);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getBirdById = async (req, res) => {
  try {
    const bird = await birdModel.findOne({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).json(bird);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updateBirdById = async (req, res) => {
  try {
    const bird = await birdModel.findOneAndUpdate(
      {
        $or: [{ _id: req.params.id }, { name: req.params.id }],
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(bird);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const deleteBirdById = async (req, res) => {
  try {
    await birdModel.findOneAndDelete({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).send("Successfully deleted entry");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
