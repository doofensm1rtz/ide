const express = require("express");
const router = express.Router();
const { cExecute } = require("../compile/compile");

router.post("/submit", (req, res) => {
  const { input, lang, code } = req.body;
  console.log("\nCode", code, "\nInput", input);
  return cExecute(code, input).then((data) => {
    res.json(data);
  });
});

module.exports = router;
