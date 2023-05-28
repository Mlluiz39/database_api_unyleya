const multer = require("multer");
const { extname, resolve } = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callback) => {
      const timestamp = Date.now();
      callback(null, `${timestamp}${extname(file.originalname)}`);
    }
  })
};