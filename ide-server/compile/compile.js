const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { error } = require("console");
const { stderr, stdout } = require("process");
const { resolve } = require("path");

const saveFile = async (fileName, data) => {
  await fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const cExecute = (data, input) => {
  return new Promise((resolve, reject) => {
    saveFile("test.c", data)
      .then(() => {
        if (!input) {
          input = "";
        }
        fs.writeFile("input.txt", input, (err) => {
          if (err) {
            console.error(err);
            reject();
          }
        });

        // Files saved successfully
        const filePath = path.join(__dirname, "../test.c");

        exec("gcc " + filePath, (err, stdout, stderr) => {
          if (err) {
            console.error(`exec error${err}`);
            resolve({
              err: true,
              output: err,
              error: stderr,
            });
          }
          // Successfully compiled
          exec("a.exe < " + "input.txt", (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error${err}`);
              resolve({
                err: true,
                output: err,
                error: stderr,
              });
            }

            // Output generated successfully
            console.log("OUTPUT: ", stdout);
            resolve({
              err: false,
              output: stdout,
            });
          });
        });
      })
      .catch(() => {
        console.error("Error in cExcecute catch");
        resolve({
          err: true,
          output: "Internal server error!",
        });
      });
  });
};

module.exports = {
  cExecute,
};
