// app.js
import express from 'express';
import upload from "./multer.js";

const app = express();
const port = 4000;

// Serve static files from the 'public' directory
app.use(express.static('public'));



app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
