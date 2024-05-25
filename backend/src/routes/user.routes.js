import { Router } from "express";
import {
  addToWishlist,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  removeFromWishList,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJwt, logoutUser);

router.route("/current-user").get(verifyJwt, getCurrentUser);

router
  .route("/wishlist")
  .post(verifyJwt, addToWishlist)
  .delete(verifyJwt, removeFromWishList);

export default router;
