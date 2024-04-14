import { Router } from "express";
import { addFlatListing, deleteFlat, getAllFlats, getFlatById, searchFlats } from "../controllers/flat.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();

router.route("/")
    .get(getAllFlats)
    .post(verifyJwt,  upload.array("flatImages",15),  addFlatListing);

router.route("/search").get(searchFlats);

router.route("/:id").get(getFlatById).delete(verifyJwt, deleteFlat);



export default router;
