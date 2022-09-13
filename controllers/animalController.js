import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";

const animalModels = {
  ["bird"]: birdModel,
  ["cat"]: catModel,
  ["dog"]: dogModel,
};

export const createAnimal = async (req, res) => {
  try {
    const animal = new animalModels[req.params.animal]({ ...req.body });
    await animal.save();
    res.status(201).send("Successfully create new bird");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getAnimals = async (req, res) => {
  try {
    const animals = await animalModels[req.params.animal].find({});
    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
export const getAnimalById = async (req, res) => {
  try {
    const animal = await animalModels[req.params.animal].findOne({
      _id: req.params.id,
    });
    res.status(200).json(animal);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
export const updateAnimal = async (req, res) => {
  try {
    const animal = await animalModels[req.params.animal].findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(animal);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
export const deleteAnimal = async (req, res) => {
  try {
    await animalModels[req.params.animal].findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send("Successfully deleted entry");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
