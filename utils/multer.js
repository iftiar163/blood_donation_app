import multer from "multer";

// Multer config
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.filename);
  },
});

// Export multer
export const userPhoto = multer({ storage }).single("photo");
