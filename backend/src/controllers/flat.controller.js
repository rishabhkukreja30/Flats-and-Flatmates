import { Flat } from "../models/flat.model.js";
import { ApiError } from "../utils/ApiErrror.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { flatListing } from "../utils/types.js";


const addFlatListing = async (req, res) => {
    // take flat input from the user
    const {title ,description, flatType, city, area, location, roomRent, flatRent, preferance, availableFrom, amenities} = req.body;
    // validate the inputs
    const { success } = flatListing.safeParse(req.body);
    if (!success) {
      throw new ApiError(400, "Please provide necessary flat details");
    }

    // console.log(req.files);

    // check for flatImages and store them in flat images arrray
    const flatImages = [];
    if(req.files) {
        await Promise.all(req.files.map(async (file) => {
            const flatImageLocalPath = file.path;
            const flatImage = await uploadOnCloudinary(flatImageLocalPath);
            flatImages.push(flatImage?.url);
        }))
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
        preferance,
        availableFrom,
        postedBy: req.user._id,
        amenities,
        flatImages
    })

    if (!flat) {
        throw new ApiError(500, "Something went wrong while creating the flat")
    }
     
    return res.status(201).json(
        new ApiResponse(201, {}, "Flat created succesfully"),
    );

}

const getAllFlats = async (req, res) => {
    const flats = await Flat.find();
    if (!flats) {
        throw new ApiError(500, "Something went wrong while retrieving the flats")
    }
    return res.status(200).json(
        new ApiResponse(200, flats, "Flats retrieved succesfully"),
    );
}




export {getAllFlats, addFlatListing}