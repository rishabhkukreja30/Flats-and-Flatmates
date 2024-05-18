import mongoose, { Schema } from "mongoose";
import { User } from "./user.model.js";

const flatSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    flatType: {
      type: String,
      enum: ["1BHK", "2BHK", "3BHK", "4BHK+"],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    roomRent: {
      type: Number,
      required: true,
    },
    flatRent: {
      type: Number,
      required: true,
    },
    preference: {
      type: String,
      enum: ["Male", "Female", "Anyone"],
      required: true,
    },
    availableFrom: {
      type: Date,
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postedByName: {
      type: String,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
    },
    furnishing: {
      type: String,
      required: true,
    },
    flatImages: [{ type: String }],
  },
  { timestamps: true }
);

flatSchema.post("save", async function (flat) {
  try {
    // Find the user associated with the flat
    const user = await User.findById(flat.postedBy);

    // If user is found, add the flat to their listings
    if (user) {
      user.listings.push(flat._id); // Assuming listings is an array of flat IDs
      await user.save({ validateBeforeSave: false }); // Save the updated user model
    }
  } catch (error) {
    console.error("Error updating user listings:", error);
  }
});

export const Flat = mongoose.model("Flat", flatSchema);
