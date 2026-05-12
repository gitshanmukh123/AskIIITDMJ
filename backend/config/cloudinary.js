import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import streamifier from "streamifier";

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/**
 * Upload buffer/file to Cloudinary
 * Works perfectly on Vercel serverless
 */
const uploadOnCloudinary = async (file) => {
  try {
    if (!file) {
      throw new Error("File is required");
    }

    // MEMORY STORAGE CASE (Vercel Production)
    if (file.buffer) {
      return await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "auto",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );

        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    }

    // LOCAL DEVELOPMENT (diskStorage)
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });

    return result.secure_url;

  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    throw error;
  }
};

export default uploadOnCloudinary;
export { cloudinary };