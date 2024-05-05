import zod from "zod";

const registerBody = zod.object({
  username: zod.string().max(30).min(3),
  email: zod.string().email(),
  password: zod.string().min(6),
  fullName: zod.string().max(50),
  phoneNumber: zod.string().min(10).max(10),
  // profilePicture: zod.string().optional(),
  listings: zod.array(zod.string()).optional(),
  wishList: zod.array(zod.string()).optional(),
});

const loginBody = zod.object({
  username: zod.string().max(30).min(3).optional(),
  email: zod.string().email().optional(),
  password: zod.string().min(6),
});

const flatListing = zod.object({
  title: zod.string().min(1),
  description: zod.string().min(1).optional(),
  flatType: zod.enum(["1BHK", "2BHK", "3BHK", "4BHK+"]),
  city: zod.string().min(1),
  area: zod.string().min(1),
  location: zod.string().min(1),
  roomRent: zod.string(), // update to number later
  flatRent: zod.string(), // update to number later
  preferance: zod.enum(["Male", "Female", "None"]),
  availableFrom: zod.string(),
  amenities: zod.array(zod.string()).optional(),
  flatImages: zod.array(zod.string()).optional(),
});

export { registerBody, loginBody, flatListing };
