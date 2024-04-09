import { registerBody } from "../utils/types.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = async (req, res) => {
  //get input from the user/frontend
  //validate the inputs
  const { success } = registerBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Email already taken / Incorrect credentials",
    });
  }

  //   check if user already exists
  const { username, email, password, fullName, phoneNumber } = req.body;

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res.status(400).json({
      message: "User with this email or username already exists",
    });
  }

  //   check for profilePicture
  const profilePictureLocalPath = req.files?.profilePicture[0]?.path;

  const profilePicture = await uploadOnCloudinary(profilePictureLocalPath);

  if (!profilePicture) {
    return res.status(400).json({
      message: "profile picture is required",
    });
  }

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
    return res
      .status(500)
      .json({ message: "Something went wrong while creating the user" });
  }

  return res.status(201).json({
    message: "User registered succesfully",
  });
};

export { registerUser };
