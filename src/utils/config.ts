import dotenv from 'dotenv'
dotenv.config()
module.exports = {
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  multer: {
    dest: 'uploads/', // Upload destination folder
  },
};
