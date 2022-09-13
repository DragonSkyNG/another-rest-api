import { response } from "express";
import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";
import favoritePlaceModel from "../models/favoritePlaceModel.js";

export const createFavoritePlace = async (req, res) => {
  try {
    const favoritePlace = new favoritePlaceModel({ ...req.body });
    await favoritePlace.save();
    res.status(201).send("Successfully create new Favorite Place");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getAllFavoritePlaces = async (req, res) => {
  try {
    const favoritePlace = await favoritePlaceModel.find();
    res.status(200).json(favoritePlace);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getFavoritePlaceById = async (req, res) => {
  try {
    const favoritePlace = await favoritePlaceModel.findOne({
      _id: req.params.id,
    });
    res.status(200).json(favoritePlace);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const updateFavoritePlaceById = async (req, res) => {
  try {
    const favoritePlace = await favoritePlaceModel.findOneAndUpdate(
      {
        $or: [{ _id: req.params.id }, { name: req.params.id }],
      },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(favoritePlace);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const deleteFavoritePlaceById = async (req, res) => {
  try {
    await favoriteModel.findOneAndDelete({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
    });
    res.status(200).send("Successfully deleted entry");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getAllAnimals = async (req, res) => {
  const animalModels = {
    ["bird"]: birdModel,
    ["cat"]: catModel,
    ["dog"]: dogModel,
  };
  try {
    const allFavoritePlaces = await favoritePlaceModel.findOne({
      place: req.params.name,
    });
    const animals = await Promise.all(
      allFavoritePlaces.animal.map(async (animal) => {
        return await animalModels[animal.entity].findOne({ _id: animal.id });
      })
    );
    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
  }
};

export const getMostFavoritePlace = async (req, res) => {
  try {
    const favoritePlaces = await favoritePlaceModel.find();
    const popularPlace = favoritePlaces.reduce((prev, curr) => {
      return prev.animal.length > curr.animal.length ? prev : curr;
    });
    res.status(200).json(popularPlace.place);
  } catch (error) {
    console.error(error);
  }
};
