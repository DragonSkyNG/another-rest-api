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
    res.send(200).json(favoritePlace);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getFavoritePlaceById = async (req, res) => {
  try {
    const favoritePlace = await favoritePlaceModel.findOne({
      $or: [{ _id: req.params.id }, { name: req.params.id }],
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
