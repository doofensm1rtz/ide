const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { error } = require("console");
const { stderr, stdout } = require("process");
const { resolve } = require("path");
const { saveFile, deleteFile } = require("../helpers/helpers");

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

const cppExecute = (data, input) => {
  return new Promise((resolve, reject) => {
    saveFile("test.cpp", data)
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
        const filePath = path.join(__dirname, "../test.cpp");

        exec("g++ " + filePath, (err, stdout, stderr) => {
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

const javaExecute = (data, input) => {
  return new Promise((resolve, reject) => {
    saveFile("Main.java", data)
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
        const filePath = path.join(__dirname, "../Main.java");

        exec("javac " + filePath, (err, stdout, stderr) => {
          if (err) {
            console.error(`exec error${err}`);
            resolve({
              err: true,
              output: err,
              error: stderr,
            });
          }
          // Successfully compiled
          exec("java " + filePath + " < input.txt", (err, stdout, stderr) => {
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

const pythonExecute = (data, input) => {
  return new Promise((resolve, reject) => {
    saveFile("test.py", data)
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
        const filePath = path.join(__dirname, "../test.py");

        exec("py " + filePath + " < input.txt", (err, stdout, stderr) => {
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
      })
      .catch(() => {
        console.error("Error in pythonExcecute catch");
        resolve({
          err: true,
          output: "Internal server error!",
        });
      });
  });
};

const compiler = {
  cExecute,
  cppExecute,
  javaExecute,
  pythonExecute,
  deleteFile,
};

module.exports = compiler;
