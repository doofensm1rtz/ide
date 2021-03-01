const fs = require("fs");
const path = require("path");

const saveFile = async (fileName, data) => {
  await fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const deleteFile = async (filePath) => {
  await fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file: ", err);
    }
  });
};

module.exports = {
  saveFile,
  deleteFile,
};
