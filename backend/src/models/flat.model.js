import mongoose, { Schema } from "mongoose";

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
    city :{
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
    preferance: {
      type: String,
      enum: ["Male", "Female", "None"],
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
    amenities: [
      {
        type: String,
      },
    ],
    flatImages: [{ type: String }],
  },
  { timestamps: true }
);

export const Flat = mongoose.model("Flat", flatSchema);
