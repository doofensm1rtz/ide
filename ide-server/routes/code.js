const express = require("express");
const router = express.Router();
const compiler = require("../compile/compile");
const { deleteFile } = require("../helpers/helpers");

router.post("/submit", (req, res) => {
  const { input, lang, code } = req.body;

  switch (lang) {
    case "c":
      return compiler.cExecute(code, input).then((data) => {
        res.json(data);
        deleteFile(__dirname + "../../test.c");
        deleteFile(__dirname + "../../input.txt");
        deleteFile(__dirname + "../../a.exe");
      });

    case "cpp":
      return compiler.cppExecute(code, input).then((data) => {
        res.json(data);
        deleteFile(__dirname + "../../test.cpp");
        deleteFile(__dirname + "../../input.txt");
        deleteFile(__dirname + "../../a.exe");
      });

    case "python":
      return compiler.pythonExecute(code, input).then((data) => {
        res.json(data);
        deleteFile(__dirname + "../../test.py");
        deleteFile(__dirname + "../../input.txt");
      });

    case "java":
      return compiler.javaExecute(code, input).then((data) => {
        res.json(data);
        deleteFile(__dirname + "../../Main.java");
        deleteFile(__dirname + "../../Main.class");
        deleteFile(__dirname + "../../input.txt");
      });
  }
});

module.exports = router;
