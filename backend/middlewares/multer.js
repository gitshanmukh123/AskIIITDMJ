import multer from "multer";
import path from "path";
import fs from "fs";

// LOCAL DEVELOPMENT
const localStorage = multer.diskStorage({
  destination: (req, file, cb) => {

    const dir = "./public";

    // Create folder locally if not exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

// VERCEL PRODUCTION
const storage =
  process.env.NODE_ENV === "production"
    ? multer.memoryStorage()
    : localStorage;

export const upload = multer({
  storage,
});