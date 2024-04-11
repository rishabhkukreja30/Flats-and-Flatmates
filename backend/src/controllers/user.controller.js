import { registerBody } from "../utils/types.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiErrror.js";

const registerUser = async (req, res) => {
  //get input from the user/frontend
  //validate the inputs
  const { success } = registerBody.safeParse(req.body);
  if (!success) {
    throw new ApiError(400, "Invalid credentials")
  }

  //   check if user already exists
  const { username, email, password, fullName, phoneNumber } = req.body;

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(400, "User with this email or username already exists")
  }

  //   check for profilePicture
  const profilePictureLocalPath = req.files?.profilePicture[0]?.path;

  const profilePicture = await uploadOnCloudinary(profilePictureLocalPath);

  const user = await User.create({
    username,
    email,
    password,
    fullName,
    phoneNumber,
    profilePicture: profilePicture?.url || "",
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
   throw new ApiError(500, "Something went wrong while creating the user")
  }

  return res.status(201).json(
    new ApiResponse(201, createdUser, "User registered succesfully"),
  );
};

export { registerUser };
