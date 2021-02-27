const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("myapp listening on port " + port);
});
