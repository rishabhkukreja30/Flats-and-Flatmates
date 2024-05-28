import multer from "multer";
import path from "path";

const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, "public/temp");
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
