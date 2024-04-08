import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrpt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
    },
    fullName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: 50,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone number is required"],
      trim: true,
      unique: true,
    },
    profilePicture: {
      type: String,
    },
    listings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Flat",
      },
    ],
    wishList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Flat",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified["password"]) return next();

  this.password = bcrpt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrpt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
