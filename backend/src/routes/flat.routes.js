import { Router } from "express";
import { addFlatListing, getAllFlats } from "../controllers/flat.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();

router.route("/").get(getAllFlats).post(verifyJwt,  upload.array("flatImages",15),  addFlatListing);


export default router;
