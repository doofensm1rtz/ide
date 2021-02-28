const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Cors
app.use(cors());

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/code", require("./routes/code"));

// Port
const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Server running on port=" + port);
});
