import { query } from "express";
import { Flat } from "../models/flat.model.js";
import { ApiError } from "../utils/ApiErrror.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { flatListing } from "../utils/types.js";
import { asyncHandler } from "../utils/asyncHnadler.js";
import { User } from "../models/user.model.js";

const addFlatListing = asyncHandler(async (req, res) => {
  // take flat input from the user
  const {
    title,
    description,
    flatType,
    city,
    area,
    location,
    roomRent,
    flatRent,
    preference,
    availableFrom,
    deposit,
    furnishing,
  } = req.body;
  // validate the inputs
  // const { success } = flatListing.safeParse(req.body);
  // if (!success) {
  //   throw new ApiError(400, "Please provide necessary flat details");
  // }

  // console.log("req.files" + req.files);

  // check for flatImages and store them in flat images arrray
  const flatImages = [];
  if (req.files) {
    await Promise.all(
      req.files.map(async (file) => {
        const flatImageLocalPath = file.path;
        const flatImage = await uploadOnCloudinary(flatImageLocalPath);
        flatImages.push(flatImage?.url);
      })
    );
  }

  // create a new flat in the database
  const flat = await Flat.create({
    title,
    description,
    flatType,
    city,
    area,
    location,
    roomRent,
    flatRent,
    preference,
    availableFrom,
    postedBy: req.user._id,
    postedByName: req.user.fullName,
    contact: req.user.phoneNumber,
    deposit,
    furnishing,
    flatImages,
  });

  if (!flat) {
    throw new ApiError(500, "Something went wrong while creating the flat");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, flat, "Flat created succesfully"));
});

const getAllFlats = asyncHandler(async (req, res) => {
  const flats = await Flat.find();
  if (!flats) {
    throw new ApiError(500, "Something went wrong while retrieving the flats");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, flats, "Flats retrieved succesfully"));
});

const getFlatById = asyncHandler(async (req, res) => {
  const flat = await Flat.findById(req.params.id);
  if (!flat) {
    throw new ApiError(500, "Cannot find this flat");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, flat, "Flat retrieved succesfully"));
});

const deleteFlat = asyncHandler(async (req, res) => {
  const flat = await Flat.findByIdAndDelete(req.params.id);
  if (!flat) {
    throw new ApiError(500, "Cannot delete this flat");
  }

  // const { listings } = req.user;
  await User.findByIdAndUpdate(req.user._id, {
    $pull: { listings: req.params.id },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Flat deleted succesfully"));
});

// search flats
const searchFlats = asyncHandler(async (req, res) => {
  const {
    city,
    flatRentRange,
    flatType,
    preference,
    availability,
    furnishing,
  } = req.query;
  // Build the query object based on the provided search parameters
  const query = {};

  console.log(typeof parseInt(flatRentRange));

  if (city) query.city = city;
  if (flatRentRange) query.flatRent = { $lte: parseInt(flatRentRange) };
  if (flatType) query.flatType = flatType;
  if (preference) query.preference = preference;
  if (furnishing) query.furnishing = furnishing;

  const flats = await Flat.find(query);
  if (!flats) {
    throw new ApiError(500, "Something went wrong while retrieving the flats");
  }

  if (flats.length === 0) {
    res.status(200).json(new ApiResponse(200, {}, "No Flats Found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, flats, "Flats retrieved succesfully"));
});

export { getAllFlats, addFlatListing, getFlatById, deleteFlat, searchFlats };
