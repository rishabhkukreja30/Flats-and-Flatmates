import { loginBody, registerBody } from "../utils/types.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiErrror.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHnadler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get input from the user/frontend
  //validate the inputs
  const { success } = registerBody.safeParse(req.body);
  if (!success) {
    return res
      .status(200)
      .json(new ApiResponse(400, {}, "Invalid Credentilas"));
  }

  //   check if user already exists
  const { username, email, password, fullName, phoneNumber } = req.body;

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          400,
          {},
          "User with this email or username already exists"
        )
      );
  }

  // console.log(req.file.path);
  //   check for profilePicture
  // let profilePictureLocalPath;

  // if(req.file.path) {
  //   profilePictureLocalPath = req.file.path;
  // }

  // const profilePicture = await uploadOnCloudinary(profilePictureLocalPath);

  const user = await User.create({
    username,
    email,
    password,
    fullName,
    phoneNumber,
    // profilePicture: profilePicture?.url || "",
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    return res
      .status(200)
      .json(
        new ApiResponse(500, {}, "Something went wrong while creating the user")
      );
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered succesfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // take input from user in req.body
  const { success } = loginBody.safeParse(req.body);
  if (!success) {
    return res
      .status(200)
      .json(new ApiResponse(400, {}, "Invalid Credentials"));
  }

  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          400,
          {},
          "User with this email or username does not exist"
        )
      );
  }

  const userDetails = await User.findById(user._id).select("-password");

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    return res.status(200).json(new ApiResponse(400, {}, "Incorrect Password"));
  }

  // generate the token and set the token in cookies
  const token = await user.generateToken();

  // make sure cookies can only be edited by th server and not the browser
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json(
      new ApiResponse(
        200,
        { userDetails, token },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("token", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  const user = await User.findById(req.user?._id);

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  if (newPassword !== confirmPassword) {
    throw new ApiError(400, "Passwords do not match");
  }

  user.password = newPassword;

  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changes successfully"));
});

export { registerUser, loginUser, logoutUser };
