import zod from "zod";

const registerBody = zod.object({
  username: zod.string().max(30).min(3),
  email: zod.string().email(),
  password: zod.string().min(6),
  fullName: zod.string().max(50),
  phoneNumber: zod.string().min(10).max(10),
  profilePicture: zod.string().optional(),
  listings: zod.array(zod.string()).optional(),
  wishList: zod.array(zod.string()).optional()
});

const loginBody = zod.object({
  username: zod.string().max(30).min(3).optional(),
  email: zod.string().email().optional(),
  password: zod.string().min(6),
});

export { registerBody, loginBody };
