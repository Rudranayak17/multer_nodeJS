import multer from "multer";
import path from "path";
// Set up the Multer storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './images'); // Store uploaded images in the 'public/images' directory
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Rename the uploaded file
    },
  });
  
  const upload = multer({ storage: storage });


export default upload