const multer = require("multer");
const { extname, resolve } = require("path");
const timestamp = Date.now();

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callback) => {
      callback(null, `${timestamp}${extname(file.originalname)}`);
    }
  })
};